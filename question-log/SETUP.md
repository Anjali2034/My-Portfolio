# Question log: setup (about 5 minutes)

Every question asked to the "Ask about Anjali" bot on the live site is saved as a row in a private Google Sheet, with the answer the bot gave.

## 1. Create the sheet and script

1. Go to [sheets.new](https://sheets.new) and name the sheet, e.g. **Portfolio bot questions**.
2. In the sheet, open **Extensions → Apps Script**.
3. Delete the sample code, paste in everything from `Code.gs` (this folder), and click **Save**.
4. Choose **testLog** in the function dropdown at the top and click **Run**. Google will ask you to authorise the script: choose your account, then **Advanced → Go to (project name) → Allow**. This happens only once, and the script can only write to this one sheet.
5. Back in the sheet, a **Questions** tab should now have one "Test question" row. You can delete that row.

## 2. Publish it as a web app

1. In Apps Script, click **Deploy → New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set **Execute as: Me** and **Who has access: Anyone**. "Anyone" only lets the website *send* questions in; nobody can read your sheet.
4. Click **Deploy** and copy the **Web app URL**. It looks like `https://script.google.com/macros/s/AKfy.../exec`.

## 3. Connect the site

Paste the URL into `logUrl` near the top of `bot-knowledge.js`:

```js
logUrl: "https://script.google.com/macros/s/AKfy.../exec",
```

Then deploy the site as usual.

## Keep your own testing out of the log

- Running the site locally (`localhost` or opening the file) never logs.
- On the live site, open it once on each of your devices with `?nolog` at the end, for example `https://my-portfolio-anjali2034.vercel.app/?nolog`. That device stays excluded. Open it with `?log` to undo.

## Reading the sheet

| Column | Meaning |
| --- | --- |
| Question | Exactly what the visitor typed, or the suggestion they tapped |
| Answered with | The topic the bot picked (names match `id` in `bot-knowledge.js`) |
| Bot answer | The full answer shown |
| Fell back? | **YES** means the bot had no answer and offered your email. These are the questions to add next. |
| Typed or tapped | "typed" questions show what people really want to know |
| Visitor | A random code per browser visit. Filter by it to read one person's whole conversation |
| Device / Came from | Phone or desktop, and the referring site (e.g. linkedin.com) |

To see the gaps quickly: **Data → Create a filter**, then filter "Fell back?" to YES.

## If you edit Code.gs later

Use **Deploy → Manage deployments → Edit (pencil) → Version: New version → Deploy**. This keeps the same URL, so the site needs no change.
