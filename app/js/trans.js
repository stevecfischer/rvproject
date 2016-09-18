var TransRow = React.createClass({
    render: function () {
        if (this.props.tran.transtype == "credit") {
            var transType = "credit trans-row"
        } else {
            var transType = "debit trans-row"
        }
        return (
            <div className={transType}>
                <div className="trans-type"></div>
                <div className="tran trans-content-wrapper">
                    <div className="trans-title">{this.props.tran.title}</div>
                    <div className="trans-id">{this.props.tran.transid}</div>
                </div>
                <div className="tran trans-amount">${this.props.tran.amount}</div>
            </div>
        );
    }
})

var CardTrans = React.createClass({
    render: function () {
        var rows = [];
        this.props.trans.forEach(function (tran) {
            rows.push(<TransRow tran={tran} key={tran.transid}/>);
        });
        return (
            <div className="card-trans">
                {rows}
            </div>
        );
    }
});
var CardRow = React.createClass({
    render: function () {
        var cardType = "card-issuer " + this.props.card.issuer;
        if (this.props.card.status == "active") {
            var cardActive = 'card-row active';
        } else {
            var cardActive = 'card-row';
        }
        return (
            <div className={cardActive}>
                <div className={cardType}>&nbsp;</div>
                <div className="card-number">{this.props.card.number}</div>
                <div className="card-expire">Valid Thru: {this.props.card.expire}</div>
            </div>
        );
    }
});

var TransHead = React.createClass({
    render: function () {
        return (
            <div className="section-head trans-head">
                <h2>Current Balance</h2>
                <div className="account-balance">$729.92</div>
                <div className="smaller-border"></div>
            </div>
        )
    }
});

var MyCardsHead = React.createClass({
    render: function () {
        return (
            <div className="section-head card-head">
                <h2>My Wallets</h2>
                <div className="wallet-plus"><img src="images/wallet-add.png"/></div>
            </div>
        )
    }
});

var MyCards = React.createClass({
    render: function () {
        var rows = [];
        this.props.cards.forEach(function (card) {
            rows.push(<CardRow card={card} key={card.number}/>);
        });
        return (
            <div className="my-cards">
                {rows}
            </div>
        );
    }
});

var MyWallet = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="my-wallet-wrapper">
                    <MyCardsHead /> <MyCards cards={this.props.cards}/>
                </div>
                <div className="trans-wrapper">
                    <TransHead /> <CardTrans trans={this.props.trans}/>
                </div>
            </div>
        );
    }
});

var CARDS = [
    {status: 'active', issuer: 'visa', number: '**** **** **** 2562', expire: '8/20'},
    {status: 'inactive', issuer: 'amex', number: '**** ****** 21001', expire: '8/20'},
    {status: 'inactive', issuer: 'mastercard', number: '**** **** **** 8335', expire: '8/20'}
];

var TRANS = [
    {
        title: 'Apple iPhone 6, 6g GB',
        transid: 'Electronics #343223 - 12 July, 2015',
        amount: '650.00',
        transtype: 'debit'
    },
    {title: 'Funds Added', transid: 'Payment #343212 - 11 July 2015', amount: '900.00', transtype: 'credit'},
    {title: 'Energy Bill', transid: '#343566 - July, 2015', amount: '84.96', transtype: 'debit'},
    {title: 'Mega Image SRL', transid: 'Food&Health #343566 - 11 July, 2015', amount: '112.75', transtype: 'debit'},
    {title: 'ATM DV24', transid: '#343253 - 09 July, 2015', amount: '200.00', transtype: 'debit'},
    {title: 'Lukoil Station', transid: 'Gas #343253 - 09 July, 2015', amount: '190.48', transtype: 'debit'}
];

ReactDOM.render(
    <MyWallet cards={CARDS} trans={TRANS}/>,
    document.getElementById('app')
);
