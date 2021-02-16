const Phone = require('../models/Phone')
const mongoose = require('mongoose')
const fakeDataPhone = { 
    name: "test",
   	manufacturer: "test-m",
    description: "test-d",
    color: "test-c",
    price: "1",
    screen: "test-s",
    processor: "2",
    ram: "3",
    imageRaw: "test-i" 
}

describe('Test MongoDB Phone Catalogue', () => {
  beforeAll(async () => {
        await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useCreateIndex: true }, (err) => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    it('Create and save phone  succesfully' , async () => {
        const testPhone = new Phone(fakeDataPhone);
        const savedPhone = await testPhone.save();

        expect(savedPhone._id).toBeDefined();
        expect(savedPhone.manufacturer).toBe(testPhone.manufacturer);
        expect(savedPhone.description).toBe(testPhone.description);
        expect(savedPhone.color).toBe(testPhone.color)
        expect(savedPhone.price).toBe(testPhone.price)
        expect(savedPhone.screen).toBe(testPhone.screen)
        expect(savedPhone.imageRaw).toBe(testPhone.imageRaw)
    });

    it('Insert phone successfully, but the field does not defined in schema should be undefined', async () => {
        const phoneWithoutRequiredField = new Phone({ name: 'ItsGonnaFail' });
        let err;
        try {
            const savedphoneWithoutRequiredField = await phoneWithoutRequiredField.save();
            error = savedphoneWithoutRequiredField;
        } catch (error) {
            err = error
        }
        expect(err).toBeInstanceOf(mongoose.Error.ValidationError)
        expect(err.errors.manufacturer).toBeDefined();
        expect(err.errors.description).toBeDefined();
        expect(err.errors.color).toBeDefined();
        expect(err.errors.price).toBeDefined();
        expect(err.errors.screen).toBeDefined();
        expect(err.errors.manufacturer).toBeDefined();
        expect(err.errors.imageRaw).toBeDefined();
    });


})