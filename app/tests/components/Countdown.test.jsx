var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Test Countdown component', () => {
    it('Shoud exist', () => {
        expect(Countdown).toExist();
    });

    describe('#setSecondsCount', () => {
        it('Should set #secondsCount and change #countdownStatus', (done) => {
            var component = TestUtils.renderIntoDocument(<Countdown/>);
            component.setSecondsCount(11);

            expect(component.state.secondsCount).toBe(11);
            expect(component.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(component.state.secondsCount).toBe(10);
                done();
            }, 1001);
        })

        it('Should set #secondsCount to 0 after finishing', (done) => {
            var component = TestUtils.renderIntoDocument(<Countdown/>);
            component.setSecondsCount(1);

            setTimeout(() => {
                expect(component.state.secondsCount).toBe(0);
                done();
            }, 3001);
        })
    });
})
