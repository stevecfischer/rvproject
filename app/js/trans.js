var TranRow = React.createClass({
    render: function () {
        if (this.props.transtype == "credit") {
            var transType = "credit trans-row"
        } else {
            var transType = "debit trans-row"
        }
        return (
            <div className={transType}>
                <div className="trans-type"></div>
                <div className="tran trans-content-wrapper">
                    <div className="trans-title">{this.props.title}</div>
                    <div className="trans-id">{this.props.transid}</div>
                </div>
                <div className="tran trans-amount">${this.props.amount}</div>
            </div>
        );
    }
})

var GetCardTrans = React.createClass({
    render: function () {
        return (
            <div className="card-trans">
                hellow
            </div>
        );
    }
});

var TransByCard = React.createClass({
    render: function () {
        var data;
        if (this.props.currentTab === 1) {
            data = this.props.trans[0].data
        } else if (this.props.currentTab === 2) {
            data = this.props.trans[1].data
        } else {
            data = this.props.trans[2].data
        }
        return (
            <div className="card-trans">
                {data.map(function (tran) {
                    return (
                        <TranRow
                            key={tran.transid}
                            transid={tran.transid}
                            amount={tran.amount}
                            title={tran.title}
                            transtype={tran.transtype}
                        />
                    );
                }.bind(this))}
            </div>
        );
    }
});

var TransHead = React.createClass({
    render: function () {
        return (
            <div className="section-head trans-head">
                <h2 id="balance">Current Balance</h2>
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
                <div className="wallet-plus">
                    <a id="add-new-card"><img src="images/wallet-add.png"/></a>
                </div>
            </div>
        )
    }
});

var CardRow = React.createClass({
    handleClick: function (e) {
        e.preventDefault();
        this.props.handleClick();
    },

    render: function () {
        var cardType = "card-issuer " + this.props.issuer;
        var cardActive = 'card-row ';
        return (
            <div className={this.props.isCurrent ? (cardActive + 'active') : cardActive}>
                <a onClick={this.handleClick} href={this.props.id}>
                    <div className={cardType}>&nbsp;</div>
                    <div className="card-number">{this.props.number}</div>
                    <div className="card-expire">Valid Thru: {this.props.expire}</div>
                </a>
            </div>
        );
    }
});

var MyCards = React.createClass({

    handleClick: function (tab) {
        this.props.changeTab(tab);
    },

    render: function () {
        return (
            <div className="my-cards">
                {this.props.tabList.map(function (card) {
                    return (
                        <CardRow
                            handleClick={this.handleClick.bind(this, card)}
                            key={card.id}
                            id={card.id}
                            number={card.number}
                            expire={card.expire}
                            issuer={card.issuer}
                            status={card.status}
                            isCurrent={(this.props.currentTab === card.id)}
                        />
                    );
                }.bind(this))}
            </div>
        );
    }
});

var MyWallet = React.createClass({

    getInitialState: function () {
        return {
            tabList: CARDS,
            currentTab: 1
        };
    },

    changeTab: function (tab) {
        this.setState({currentTab: tab.id});
    },

    render: function () {
        return (
            <div className="container">
                <div className="my-wallet-wrapper">
                    <MyCardsHead /> <MyCards
                    currentTab={this.state.currentTab}
                    tabList={this.state.tabList}
                    changeTab={this.changeTab}
                    cards={this.props.cards}
                />
                </div>
                <div className="trans-wrapper">
                    <TransHead /> <TransByCard currentTab={this.state.currentTab} trans={this.props.trans}/>
                </div>
            </div>
        );
    }
});

var CARDS = [
    {id: 1, status: 'active', issuer: 'visa', number: '**** **** **** 2562', expire: '8/20'},
    {id: 2, status: 'inactive', issuer: 'amex', number: '**** ****** 21001', expire: '8/20'},
    {id: 3, status: 'inactive', issuer: 'mastercard', number: '**** **** **** 8335', expire: '8/20'}
];

var TRANS = [
    {
        'data': [
            {
                title: 'Visa Apple iPhone 6, 6g GB',
                transid: 'Electronics #343223 - 12 July, 2015',
                amount: '650.00',
                transtype: 'debit'
            },
            {title: 'Funds Added', transid: 'Payment #343212 - 11 July 2015', amount: '900.00', transtype: 'credit'},
            {title: 'Energy Bill', transid: '#343566 - July, 2015', amount: '84.96', transtype: 'debit'},
            {
                title: 'Mega Image SRL',
                transid: 'Food&Health #343566 - 11 July, 2015',
                amount: '112.75',
                transtype: 'debit'
            },
            {title: 'ATM DV24', transid: '#343253 - 09 July, 2015', amount: '200.00', transtype: 'debit'},
            {title: 'Lukoil Station', transid: 'Gas #343253 - 09 July, 2015', amount: '190.48', transtype: 'debit'}
        ]
    },
    {
        'data': [
            {
                title: 'Amex Apple iPhone 6, 6g GB',
                transid: 'Electronics #343223 - 12 July, 2015',
                amount: '650.00',
                transtype: 'debit'
            },
            {title: 'vvFunds Added', transid: 'Payment #343212 - 11 July 2015', amount: '900.00', transtype: 'credit'},
            {title: 'Energy Bill', transid: '#343566 - July, 2015', amount: '84.96', transtype: 'debit'},
            {
                title: 'Mega Image SRL',
                transid: 'Food&Health #343566 - 11 July, 2015',
                amount: '112.75',
                transtype: 'debit'
            },
            {title: 'ATM DV24', transid: '#343253 - 09 July, 2015', amount: '200.00', transtype: 'debit'},
            {title: 'Lukoil Station', transid: 'Gas #343253 - 09 July, 2015', amount: '190.48', transtype: 'debit'}
        ]
    },
    {
        'data': [
            {
                title: 'Master Apple iPhone 6, 6g GB',
                transid: 'Electronics #343223 - 12 July, 2015',
                amount: '650.00',
                transtype: 'debit'
            },
            {title: 'vvFunds Added', transid: 'Payment #343212 - 11 July 2015', amount: '900.00', transtype: 'credit'},
            {title: 'Energy Bill', transid: '#343566 - July, 2015', amount: '84.96', transtype: 'debit'},
            {
                title: 'Mega Image SRL',
                transid: 'Food&Health #343566 - 11 July, 2015',
                amount: '112.75',
                transtype: 'debit'
            },
            {title: 'ATM DV24', transid: '#343253 - 09 July, 2015', amount: '200.00', transtype: 'debit'},
            {title: 'Lukoil Station', transid: 'Gas #343253 - 09 July, 2015', amount: '190.48', transtype: 'debit'}
        ]
    }
];

// end stateless

// begin state

var tabList = [
    {'id': 1, 'name': 'Mikess', 'url': '/mike'},
    {'id': 2, 'name': 'Donnie', 'url': '/donnie'},
    {'id': 3, 'name': 'Raph', 'url': '/raph'},
    {'id': 4, 'name': 'Leo', 'url': '/leo'}
];

var Tab = React.createClass({
    handleClick: function (e) {
        e.preventDefault();
        this.props.handleClick();
    },

    render: function () {
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
            <a onClick={this.handleClick} href={this.props.url}>
                {this.props.name}
            </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function (tab) {
        this.props.changeTab(tab);
    },

    render: function () {
        return (
            <nav>
                <ul>
                    {this.props.tabList.map(function (tab) {
                        return (
                            <Tab
                                handleClick={this.handleClick.bind(this, tab)}
                                key={tab.id}
                                url={tab.url}
                                name={tab.name}
                                isCurrent={(this.props.currentTab === tab.id)}
                            />
                        );
                    }.bind(this))}
                </ul>
            </nav>
        );
    }
});

var Content = React.createClass({
    render: function () {
        return (
            <div className="content">
                {this.props.currentTab === 1 ?
                    <div className="mike">
                        <img src="http://s.mlkshk.com/r/104TN"/>
                    </div>
                    : null} {this.props.currentTab === 2 ?
                <div className="donnie">
                    <img src="http://s.mlkshk.com/r/103AG"/>
                </div>
                : null} {this.props.currentTab === 3 ?
                <div className="raph">
                    <img src="http://s.mlkshk.com/r/JAUD"/>
                </div>
                : null} {this.props.currentTab === 4 ?
                <div className="leo">
                    <img src="http://s.mlkshk.com/r/ZJPL"/>
                </div>
                : null}
            </div>
        );
    }
});

//end state

ReactDOM.render(
    <MyWallet cards={CARDS} trans={TRANS}/>,
    document.getElementById('app')
);
