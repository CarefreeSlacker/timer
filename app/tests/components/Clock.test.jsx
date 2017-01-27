var React = require('react');
var ReactDOM = require('react-dom');
var Clock = require('Clock');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');

describe('Test Clock component', () => {
    it('Existing test', () => {
        expect(Clock).toExist();
    })

    describe('#formatTime', () => {
        it('test large time amount', () => {
            var seconds_count = 620;
            var expected = '10:20';
            var component = TestUtils.renderIntoDocument(<Clock/>);

            expect(component.formatTime(seconds_count)).toBe(expected)
        })

        it('test empty zeroes in beginning of time', () => {
            var seconds_count = 61;
            var expected = '01:01';
            var component = TestUtils.renderIntoDocument(<Clock/>);

            expect(component.formatTime(seconds_count)).toBe(expected)
        })
    })
})
