
import { toHundredsWords } from "../src/toHundredsWords";
import { toTensWords } from "../src/toTensWords";
import { toUnitsWords } from "../src/toUnitsWords";

describe('Convert number to words', () => {

    it('should return words for nuber from 0 to 9', () => {
        expect(toUnitsWords(0)).toBe("нула");
        expect(toUnitsWords(1)).toBe("еден");
        expect(toUnitsWords(2)).toBe("два");
        expect(toUnitsWords(3)).toBe("три");
        expect(toUnitsWords(4)).toBe("четири");
        expect(toUnitsWords(5)).toBe("пет");
        expect(toUnitsWords(6)).toBe("шест");
        expect(toUnitsWords(7)).toBe("седум");
        expect(toUnitsWords(8)).toBe("осум");
        expect(toUnitsWords(9)).toBe("девет");
    });

    it('should return words for nuber from 10 to 99', () => {
        expect(toTensWords(9)).toBe("девет");
        expect(toTensWords(10)).toBe("десет");
        expect(toTensWords(11)).toBe("единаесет");
        expect(toTensWords(12)).toBe("дванаесет");
        expect(toTensWords(13)).toBe("тринаесет");
        expect(toTensWords(14)).toBe("четиринаесет");
        expect(toTensWords(15)).toBe("петнаесет");
        expect(toTensWords(19)).toBe("деветнаесет");
        expect(toTensWords(27)).toBe("дваесет и седум");
        expect(toTensWords(34)).toBe("триесет и четири");
        expect(toTensWords(46)).toBe("четириесет и шест");
        expect(toTensWords(51)).toBe("педесет и еден");
        expect(toTensWords(62)).toBe("шеесет и два");
        expect(toTensWords(78)).toBe("седумдесет и осум");
        expect(toTensWords(83)).toBe("осумдесет и три");
        expect(toTensWords(90)).toBe("деведесет");
        expect(toTensWords(99)).toBe("деведесет и девет");
        expect(toTensWords(100)).toBe(null);
    });
    

    it('should return words for numbers from 100 - 999', () => {
        expect(toHundredsWords(100)).toBe("сто");
        expect(toHundredsWords(101)).toBe("сто и еден");
        expect(toHundredsWords(110)).toBe("сто и десет");
        expect(toHundredsWords(112)).toBe("сто и дванаесет");
        expect(toHundredsWords(120)).toBe("сто и дваесет");
        expect(toHundredsWords(200)).toBe("двесте");
        expect(toHundredsWords(300)).toBe("триста");
        expect(toHundredsWords(400)).toBe("четиристотини");
        expect(toHundredsWords(500)).toBe("петстотини");
        expect(toHundredsWords(600)).toBe("шестотини");
        expect(toHundredsWords(650)).toBe("шестотини и педесет");
        expect(toHundredsWords(700)).toBe("седумстотини");
        expect(toHundredsWords(800)).toBe("осумстотини");
        expect(toHundredsWords(822)).toBe("осумстотини дваесет и два");
        expect(toHundredsWords(900)).toBe("деветстотини");
        expect(toHundredsWords(905)).toBe("деветстотини и пет");
        expect(toHundredsWords(915)).toBe("деветстотини и петнаесет");
    });

/* 
    it("Should describe thousands", () => {
        expect(convertToWords(1001)).toBe("илјада и еден");
        expect(convertToWords(1010)).toBe("илјада и десет");
        expect(convertToWords(1100)).toBe("илјада и сто");
        expect(convertToWords(1011)).toBe("илјада и единаесет");
        // expect(convertToWords(2000)).toBe("две илјади");
       // expect(convertToWords(2456)).toBe("две илјади четиристотини педесет и шест");
        expect(convertToWords(3000)).toBe("три илјади");
        expect(convertToWords(4000)).toBe("четири илјади");
        expect(convertToWords(5000)).toBe("пет илјади");
        expect(convertToWords(6000)).toBe("шест илјади");
        expect(convertToWords(7000)).toBe("седум илјади");
        expect(convertToWords(8000)).toBe("осум илјади");
        expect(convertToWords(8431)).toBe("осумдесет седум илјади четиристотини триесет и два");
        expect(convertToWords(9000)).toBe("девет илјади");
        expect(convertToWords(9999)).toBe("девет илјади деветстотини деведесет и девет");
        expect(convertToWords(10000)).toBe("десет илјади");
        expect(convertToWords(11200)).toBe("единаесет илјади и двесте");
        expect(convertToWords(15222)).toBe("петнаесет илјади двесте дваесет и два");
        expect(convertToWords(90000)).toBe("деведесет илјади");
        expect(convertToWords(100000)).toBe("сто илјади");
        expect(convertToWords(876513)).toBe("осумстотини седумдесет шестилјади петстотини и тринаесет");
    }); */


});