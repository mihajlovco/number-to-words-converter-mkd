import { Dictionary } from '../types';

export const dictionary: Dictionary = {
  units: {
    '0': 'нула',
    '1': 'еден',
    '2': 'два',
    '3': 'три',
    '4': 'четири',
    '5': 'пет',
    '6': 'шест',
    '7': 'седум',
    '8': 'осум',
    '9': 'девет',
    singularSuffix: '',
    pluralSuffix: '',
    suffixUnder20: ''
  },
  tens: {
    '10': 'десет',
    '11': 'единаесет',
    '16': 'шеснаесет',
    '20': 'дваесет',
    '30': 'триесет',
    '40': 'четириесет',
    '50': 'педесет',
    '60': 'шеесет',
    '70': 'седумдесет',
    '80': 'осумдесет',
    '90': 'деведесет',
    suffixUnder20: 'наесет',
    singularSuffix: '',
    pluralSuffix: ''
  },
  hundreds: {
    '100': 'сто',
    '200': 'двесте',
    '300': 'триста',
    '600': 'шестотини',
    singularSuffix: '',
    pluralSuffix: 'стотини',
    suffixUnder20: ''
  },
  thousands: {
    '1': 'една',
    '2': 'две',
    singularSuffix: 'илјада',
    pluralSuffix: 'илјади',
    suffixUnder20: ''
  },
  millions: {
    '1': 'еден',
    '2': 'два',
    singularSuffix: 'милион',
    pluralSuffix: 'милиони',
    suffixUnder20: ''
  },
  billions: {
    '1': 'една',
    '2': 'две',
    singularSuffix: 'милијарда',
    pluralSuffix: 'милијарди',
    suffixUnder20: ''
  },
  minus: 'минус'
};
