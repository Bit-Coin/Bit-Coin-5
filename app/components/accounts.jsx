var React = require('react');
var ReactDOM = require('react-dom');
var fusioncharts = require('fusioncharts');
// Load the charts module
var charts = require('fusioncharts/fusioncharts.charts');
var ReactFC = require('react-fusioncharts');

charts(FusionCharts);
var myDataSource = {
    chart: {
        "caption": "",
        "theme": "ocean"
    },
    "categories": [
        {
            "category": [
                {
                    "label": "1"
                },
                {
                    "label": "2"
                },
                {
                    "label": "3"
                },
                {
                    "label": "4"
                },
                {
                    "label": "5"
                },
                {
                    "label": "6"
                },
                {
                    "label": "7"
                },
                {
                    "label": "8"
                },
                {
                    "label": "9"
                },
                {
                    "label": "10"
                },
                {
                    "label": "11"
                },
                {
                    "label": "12"
                }
            ]
        }
    ],
    "dataset": [
        {
            "seriesname": "Projected Revenue",
            "renderas": "line",
            "showvalues": "0",
            "data": [
                {
                    "value": "5000"
                },
                {
                    "value": "4550"
                },
                {
                    "value": "4100"
                },
                {
                    "value": "3650"
                },
                {
                    "value": "3200"
                },
                {
                    "value": "2750"
                },
                {
                    "value": "1900"
                },
                {
                    "value": "1900"
                },
                {
                    "value": "2000"
                },
                {
                    "value": "2100"
                },
                {
                    "value": "2200"
                },
                {
                    "value": "2300"
                }
            ]
        },
    ]
}
var props_multi_chart = {
    id: "chart-container",
    type: "mscombi2d",
    width: "100%",
    height: 400,
    dataFormat: "json",
    dataSource: myDataSource
};

var Accounts = React.createClass ({
	getInitialState: function() {
		return {
			balance: 0,
			payment: 0
		}
	},
	componentDidMount: function () {
		
	 FusionCharts['debugger'].outputTo(function (message) {
	    console.log(message);
	});
	FusionCharts['debugger'].enable(true);
	},
	onFormSubmit: function (e) {
		e.preventDefault();
		
		var balance = this.refs.balance.value;
		var payment = this.refs.payment.value;
		this.setState ({
			balance: balance,
			payment: payment
		});
		debugger;
	},
	render: function() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit}>
				<div className="large-2 small-4 columns">
					<h2>Accounts</h2>
					<p>Count: 2</p>
					<p>
						Balance
						<input type="text" ref="balance" name="balance" />
					</p>
					<p><input type="submit" name="submt" /></p>
					<p>Balance: 500</p>
					<p>Balance: 5000</p>

				</div>
				<div className="large-10 small-8 columns">
					<h4>Initial Balance: 5500</h4>
					<p>
						Monthly Payment:
						<input type="text" ref="payment" name="monthlypayment" />
					</p>
					<strong>Balancce of accounts after a number of months</strong>
					<div id='charts-container'></div>
					<ReactFC {...props_multi_chart} />
				</div>
				</form>
			</div>
		);
	}
});

module.exports = Accounts;