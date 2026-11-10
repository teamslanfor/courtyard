/**
 * Business details – Courtyard by Marriott Battle Creek.
 * Sources: SBA/SAM profile (Battle Creek Hotels LLC, UEI UJNBT4B4Y7E6, CAGE 6TH99, est. 2009, NAICS 721110,
 * contact Monicka Butzin, 269-979-2900), Michigan.org property listing (4 storeys, 102 rooms + 6 suites, saltwater
 * indoor pool, fitness room, bistro with cocktails, 24/7 Market, business center, laundry, same-day dry cleaning,
 * free parking, meeting space, outdoor patio), and meeting-venue directories (meeting room ~1,200 sq ft, up to 80).
 * Edit here, then run `npm run build`. Items marked CONFIRM should be checked with the hotel.
 */
module.exports = {
  name: 'Courtyard by Marriott Battle Creek',
  shortName: 'Courtyard Battle Creek',
  brandSub: 'Hotel · Battle Creek, Michigan',
  lang: 'en-US',
  locale: 'en_US',
  phoneFormat: 'US',
  url: 'https://www.courtyardbattlecreek.com', // CONFIRM: final domain (and that the franchise agreement allows a separate site)
  area: 'Battle Creek, Michigan',
  phone: '(269) 979-2900',
  phoneIntl: '+12699792900',
  phoneHref: 'tel:+12699792900',
  whatsapp: '',
  whatsappNumber: '',
  address: { street: '12891 Harper Village Drive', city: 'Battle Creek', region: 'MI', postcode: '49014', country: 'US' },
  addressLine: '12891 Harper Village Drive, Battle Creek, MI 49014',
  mapQuery: '12891 Harper Village Drive, Battle Creek, MI 49014',
  bookingUrl: 'https://www.marriott.com/en-us/hotels/btlcy-courtyard-battle-creek/overview/',
  yell: 'https://www.marriott.com/en-us/hotels/btlcy-courtyard-battle-creek/overview/',
  reviewSiteName: 'Marriott.com',
  // Hotel front desk is staffed around the clock (standard for the property type) – CONFIRM; check-in/out times not published.
  hours: null, openFrom: null, openTo: null, hoursShort: '', hoursLabel: '', openingHoursSchema: '',
  schemaType: 'Hotel',
  schemaDescription: 'Four-story hotel in Battle Creek, Michigan with 102 guest rooms and six suites, a saltwater indoor pool, fitness room, bistro, 24/7 market and meeting space.',
  footerAbout: 'A four-story hotel on Harper Village Drive in Battle Creek, Michigan, with 102 guest rooms, six suites, a saltwater indoor pool, a bistro and meeting space.',
  ctaTitle: 'Planning a stay or an event?',
  ctaText: 'Book your room on Marriott.com, or call the hotel about group rates and meetings.',
  ctaButton: 'Group & event enquiry',
  headerCta: 'Book a room',
  headerCtaHref: 'https://www.marriott.com/en-us/hotels/btlcy-courtyard-battle-creek/overview/',
  manifestShort: 'Courtyard BC',
  license: '',
  trademarkNote: 'Courtyard® and Marriott® are registered trademarks of Marriott International, Inc. This hotel is independently owned by Battle Creek Hotels LLC and operated under a franchise from Marriott International.',
  nav: { services: 'Stay & Amenities', about: 'Meetings & Events', portfolio: 'Gallery' },
  contactName: 'Monicka Butzin',

  // Group / event enquiries are emailed here via FormSubmit (formsubmit.co). Email from the SBA/SAM profile – CONFIRM.
  // The FIRST submission sends a one-time activation email to this inbox – click the link in it once.
  email: 'demonicka.butzin@amerilodgegroup.com',
  formEndpoint: null,

  socials: [
    { label: 'Courtyard Battle Creek on Marriott.com', icon: 'star', url: 'https://www.marriott.com/en-us/hotels/btlcy-courtyard-battle-creek/overview/' },
  ],
};
if (!module.exports.formEndpoint && module.exports.email) {
  module.exports.formEndpoint = 'https://formsubmit.co/ajax/' + module.exports.email;
}
