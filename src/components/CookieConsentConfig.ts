import type { CookieConsentConfig } from 'vanilla-cookieconsent';

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    functionality: {},
    analytics: {
      services: {
        ga4: {
          label:
            '<a href="https://marketingplatform.google.com/about/analytics/terms/us/" target="_blank">Google Analytics 4 (dummy)</a>',
          onAccept: () => {
            console.log('ga4 accepted');
            // TODO: load ga4
          },
          onReject: () => {
            console.log('ga4 rejected');
          },
          cookies: [
            {
              name: /^_ga/,
            },
          ],
        },
        another: {
          label: 'Another one (dummy)',
        },
      },
    },
  },
  language: {
    default: 'en',
    autoDetect: 'browser',
    translations: {
      en: {
        consentModal: {
          title: "We use cookies",
          description:
            'Cookies help us deliver the best experience on our website. By using our website, you agree to the use of cookies.',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          showPreferencesBtn: 'Manage preferences',
          footer:
            '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
        },
        preferencesModal: {
          title: 'Consent Preferences Center',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close modal',
          serviceCounterLabel: 'Service|Services',
          sections: [
            {
              title: 'Cookie Usage',
              description:
                'We use cookies to provide the best possible experience on our website. Please choose which types of cookies you would like to allow.',
            },
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                'These cookies are essential for the proper functioning of the website. They do not store any personally identifiable information.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Functionality Cookies',
              description:
                'These cookies enable enhanced functionality and personalization, such as remembering your preferences. No personally identifiable information is stored.',
              linkedCategory: 'functionality',
            },
            {
              title: 'Analytics Cookies',
              description:
                'These cookies allow us to analyze site usage, so we can measure and improve performance. No personally identifiable information is stored.',
              linkedCategory: 'analytics',
            },
            {
              title: 'More information',
              description:
                'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="/contact-us/">contact us</a>.',
            },
          ],
        },
      },
    },
  },
};
