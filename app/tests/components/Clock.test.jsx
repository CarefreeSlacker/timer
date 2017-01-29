var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
//var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var Clock = require('Clock');

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
    });

    // describe('#render', () => {
    //     it('Should has default props', () => {
    //         var expected = '00:00';
    //         var component = TestUtils.renderIntoDocument(<Clock/>);
    //         var clockText= $(ReactDOM.findDOMNode(component)).find('.clock-text').text();
    //
    //         expect(clockText).toBe(expected);
    //     });
    //
    //     it('Should render right ', () => {
    //         var secondsCount = 77;
    //         var expected = '01:17';
    //         var component = TestUtils.renderIntoDocument(<Clock secondsCount={secondsCount}/>);
    //         var clockText= $(ReactDOM.findDOMNode(component)).find('.clock-text').text();
    //
    //         expect(clockText).toBe(expected);
    //    });
    // });
})
