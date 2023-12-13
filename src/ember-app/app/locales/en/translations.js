import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISItog7ДирОтдПоРабСКлModel from './models/i-i-s-itog7-дир-отд-по-раб-с-кл';
import IISItog7ДлительностьModel from './models/i-i-s-itog7-длительность';
import IISItog7ДоговорModel from './models/i-i-s-itog7-договор';
import IISItog7ЗатрВремяModel from './models/i-i-s-itog7-затр-время';
import IISItog7КлиентModel from './models/i-i-s-itog7-клиент';
import IISItog7ОказУслугModel from './models/i-i-s-itog7-оказ-услуг';
import IISItog7РасчетОстВремModel from './models/i-i-s-itog7-расчет-ост-врем';
import IISItog7УслугиModel from './models/i-i-s-itog7-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-itog7-дир-отд-по-раб-с-кл': IISItog7ДирОтдПоРабСКлModel,
    'i-i-s-itog7-длительность': IISItog7ДлительностьModel,
    'i-i-s-itog7-договор': IISItog7ДоговорModel,
    'i-i-s-itog7-затр-время': IISItog7ЗатрВремяModel,
    'i-i-s-itog7-клиент': IISItog7КлиентModel,
    'i-i-s-itog7-оказ-услуг': IISItog7ОказУслугModel,
    'i-i-s-itog7-расчет-ост-врем': IISItog7РасчетОстВремModel,
    'i-i-s-itog7-услуги': IISItog7УслугиModel
  },

  'application-name': '',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;
