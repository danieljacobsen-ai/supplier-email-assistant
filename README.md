# Circuto - Supplier Email Assistant

This is a simple landing page for Circuto, an AI email assistant tailored for busy SMB supply chain managers. The purpose of this page is to validate market interest before building the actual product.

## Implementation Details

- Built with Jekyll for GitHub Pages hosting
- Simple, clean design focused on the value proposition
- Mailchimp integration for collecting early access signups
- Mobile-responsive layout

## Local Development

To run this site locally:

1. Make sure you have Jekyll installed: `gem install jekyll bundler`
2. Clone this repository
3. Run `bundle install`
4. Start the local server: `bundle exec jekyll serve`
5. Visit `http://localhost:4000` in your browser

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Project Structure

- `_layouts/default.html`: Main layout template
- `index.markdown`: Landing page content
- `assets/`: Contains static files like images and favicon

---

## 📦 MVP Test Kit: Mockup + Landing Page + Ad Plan

### ✅ GOAL

Validate demand for an AI-powered email assistant that helps supply chain managers handle supplier emails faster and avoid delays.

---

## 1️⃣ WIREFRAME: AI Email Summary View (Mockup Description)

**View Name:** Supplier Inbox Summary\
**Purpose:** Show how AI makes supplier emails easier to process.

**Layout:**
```
+-------------------------------------------------------------------------------------------+
|                    AI-Powered Supplier Email Summary                                     |
+------------+--------------------+------------------+----------------------+---------------+
| Supplier   | Order Details       | Key Info Summary | Status / Alerts      | View Email    |
+------------+--------------------+------------------+----------------------+---------------+
| Acme Corp  | PO #12345, 50 units| ETA: Apr 14      | ✅ Confirmed          | [View Email]  |
| WidgetCo   | PO #78901, 10 boxes| Delay: Apr 10->24| ⚠️ Delayed Shipment   | [View Email]  |
| Gizmo Inc  | PO #65432, 12 pcs  | No reply yet     | ⏳ Awaiting Response  | [View Email]  |
+------------+--------------------+------------------+----------------------+---------------+
```

**Highlight Features:**

- AI extracts ETA, confirmations, order info, and issues.
- Auto-flags urgent or risky emails.
- Easy scan view — 5 seconds to see what matters.
- Each row includes a "View Email" link (can open email in Gmail in a new tab).

> Note: The "View Email" feature links out to Gmail via message ID — this avoids building a full email client while preserving context.

---

## 2️⃣ LANDING PAGE VARIANTS

Each one is structured the same way but tests a different value proposition.

### 🅰️ Variant A – **“Avoid Delays” Angle**

- **Headline:** Never Miss a Supplier Delay Again
- **Subheadline:** AI watches your inbox for critical order issues so you don’t have to.
- **CTA:** [ Join the waitlist ]

### 🅱️ Variant B – **“Inbox Overload” Angle**

- **Headline:** Turn Supplier Emails Into Instant Insights
- **Subheadline:** No more digging through threads to get answers. Get summaries and alerts in one view.
- **CTA:** [ Get Early Access ]

### 🅲️ Variant C – **“Time Savings” Angle**

- **Headline:** Save 5 Hours a Week on Supplier Emails
- **Subheadline:** Automate your inbox with AI-powered summaries and alerts.
- **CTA:** [ Join the Beta ]

**Shared Elements:**

- Screenshot or wireframe of inbox summary (from section 1).
- 3 key benefit bullets (can rotate per test):
  - "Summarizes supplier updates automatically"
  - "Flags delays and unanswered emails"
  - "Works with your existing Gmail inbox"
- Trust signal: “Built for supply chain managers by supply chain pros.”
- Optional: short 2-question form below CTA (e.g. industry, # of supplier emails/day)

---

## 3️⃣ AD COPY (for Google, LinkedIn, or newsletter)

### Ad Concept 1 – Problem Awareness

**Headline:** Still Manually Checking Every Supplier Email?
**Body:** Missing one delay can cost thousands. Let AI scan and summarize your supplier updates so you never miss a beat. Works with Gmail. Try it free.

### Ad Concept 2 – Time Savings

**Headline:** Save 5+ Hours a Week on Email
**Body:** Supply chain inboxes are brutal. Our AI assistant filters, summarizes, and flags supplier issues — so you can focus on what matters. Join the early access list.

### Ad Concept 3 – Emotional/Stress Relief

**Headline:** Stop Drowning in Supplier Emails
**Body:** Get instant clarity. Our AI scans your inbox, highlights risks, and summarizes every supplier thread. Works with Gmail — no new tools to learn.

**Targeting Notes:**

- Job titles: Supply Chain Manager, Procurement, Ops Manager, Logistics
- Company size: SMB (10–200 employees)
- Optional filters: Industry (Manufacturing, Ecommerce, Import/Export)

---

## ✅ WHAT TO BUILD FIRST

- A simple Jekyll site with 3 landing page variants (rotate with A/B testing).
- Link mockup screenshot or image of the summary UI.
- Connect Mailchimp for email capture.
- Run $50–100 of ads to each variant (~100–200 visits total).

Let me know when you're ready and I can help:

- Generate the HTML/CSS for each page
- Build the visual mockup in Figma or image
- Set up conversion tracking or analytics

