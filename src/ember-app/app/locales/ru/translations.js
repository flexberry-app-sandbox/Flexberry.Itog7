import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
