/**
 * Question log for the "Ask about Anjali" bot.
 * Paste this into Extensions → Apps Script of a Google Sheet, then deploy as a web app.
 * Each question asked on the portfolio becomes one row in the "Questions" tab.
 */
var SHEET_NAME = 'Questions';
var HEADERS = ['Time (IST)', 'Question', 'Answered with', 'Bot answer', 'Fell back?', 'Typed or tapped', 'Visitor', 'Device', 'Came from'];

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(5000);
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      ss.setSpreadsheetTimeZone('Asia/Kolkata');
      sheet = ss.insertSheet(SHEET_NAME, 0);
      sheet.appendRow(HEADERS);
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
      sheet.setColumnWidth(2, 320);
      sheet.setColumnWidth(4, 480);
    }
    var d = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (!d.q) return ContentService.createTextOutput('ignored');
    sheet.appendRow([
      new Date(),
      clean(d.q, 300),
      clean(d.topic, 40),
      clean(d.a, 1000),
      d.fallback ? 'YES' : '',
      clean(d.how, 10),
      clean(d.sid, 12),
      clean(d.device, 10),
      clean(d.ref, 80)
    ]);
    return ContentService.createTextOutput('ok');
  } catch (err) {
    return ContentService.createTextOutput('error');
  } finally {
    lock.releaseLock();
  }
}

// Keeps rows plain text: trims length and stops anything typed as "=..." being run as a formula.
function clean(v, max) {
  var s = String(v == null ? '' : v).slice(0, max);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

// Run this once from the editor (select "testLog" → Run) to check the sheet fills in.
function testLog() {
  doPost({ postData: { contents: JSON.stringify({ q: 'Test question', topic: 'test', a: 'Test answer', how: 'typed', sid: 'TEST', device: 'desktop', ref: 'setup' }) } });
}
