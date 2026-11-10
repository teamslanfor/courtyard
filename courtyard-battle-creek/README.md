# Courtyard by Marriott Battle Creek: website

A 5-page hotel website on the professional "Corporate" template, in deep teal and warm gold, in American English.

Pages:
- **Home:** hero with a "Book your stay" card.
- **Stay & Amenities:** rooms, suites, the Bistro, the saltwater indoor pool, the fitness room, and the business center and 24/7 Market.
- **Meetings & Events:** meeting space for up to about 80, group blocks, and company/government details.
- **Gallery** and **Contact**, with a group and event enquiry form.

## Sources

- **SBA/SAM profile:** Battle Creek Hotels LLC, UEI UJNBT4B4Y7E6, CAGE 6TH99, NAICS 721110, established 2009, contact Monicka Butzin, (269) 979-2900, demonicka.butzin@amerilodgegroup.com, 12891 Harper Village Dr, Battle Creek, MI 49014.
- **Michigan.org listing:** 4 storeys, 102 rooms plus 6 suites, saltwater indoor pool, fitness room with personal screens, bistro with cocktails, 24/7 Market, business center, laundry, same-day dry cleaning, free parking, meeting space and patio.
- **Venue directories:** one meeting room of about 1,200 sq ft, up to 80 guests.

## ✅ How to put it live — use the `website/` folder

The **`website/`** folder (and `courtyard-battle-creek-WEBSITE.zip`) is the whole site **flat**, with no sub-folders: `index.html`, `about.html`, `services.html`, `gallery.html`, `contact.html`, `styles.css`, `main.js`, the images and so on.

- **GitHub + Vercel:** upload **all the files** (not the folder) to the top of an empty repository. In Vercel, use **Import**, Framework **Other**, leave Root Directory empty, and **Deploy**.
- **Netlify:** drag the `website` folder onto https://app.netlify.com/drop.
- **To look at it locally:** double-click `website/index.html`.

## Bookings and enquiries

- **"Book a room"** buttons go to the hotel's official Marriott.com page, because franchise hotels take reservations through Marriott.
- **Group and event enquiries** (the Contact form and the chat assistant) are emailed through FormSubmit to the SAM contact email. The first submission sends a one-time activation email; click it.

## Editing

1. Change the text in `src/` (`site.config.js`, `services-data.js` or `pages/`).
2. Run `npm run build`, then `node flatten.js`.
3. Upload the `website/` folder again.

## ⚠️ Before launch — important

1. **Franchise permission.** Courtyard® and Marriott® are Marriott International trademarks, and franchise hotels usually need Marriott's approval for any separate website and domain. This site uses **no Marriott logos or brand artwork**, sends bookings to Marriott.com, and shows a trademark notice in the footer. **Get the owner's or Marriott's approval before publishing.**
2. **Email.** The enquiry email comes from the SAM profile. Confirm it's the right inbox for group and event sales.
3. **Facts to confirm with the hotel:** king/queen room types, free Wi-Fi, breakfast and dinner service at the Bistro, catering, pool hours, and the meeting room capacity of about 80.
4. **Photos** are royalty-free Unsplash stock images, labelled on the site as illustrative. Use the hotel's own approved photography instead. Don't copy images from Marriott.com without permission.
5. **Domain.** `url` in `src/site.config.js` is a placeholder.
