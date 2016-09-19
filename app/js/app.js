var modal = document.getElementById('new-card-modal');
var addNewButton = document.getElementById("add-new-card");
var closeModal = document.getElementsByClassName("close")[0];

addNewButton.onclick = function () {
    modal.style.display = "block";
}

closeModal.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//start form component
var ControlledInput = React.createClass({
    getInitialState: function () {
        return {
            cardnumber: "4111 1111 1111 1111",
            cardexpire: "04/22"
        };
    },

    handleChange: function (evt) {
        this.setState({
            cardnumber: evt.target.cardnumber,
            cardexpire: evt.target.cardexpire
        });
    },

    render: function () {
        return (
            <div id="form-wrapper">
                <form className="new-card-form">
                    <fieldset>
                        <label htmlFor="card-num">Card Number</label>
                        <input type="text"
                               name="card-num"
                               className="jpinput"
                               id="card-num"
                               value={this.state.cardnumber}
                               onChange={this.handleChange}
                               placeholder="4111 1111 1111 1111"/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="card-expire">Enter Expiration Date</label>
                        <input type="text"
                               name="card-expire"
                               className="jpinput"
                               id="card-expire"
                               placeholder="04/22"
                               value={this.state.cardexpire}
                               onChange={this.handleChange}/>
                    </fieldset>
                    <input className="new-card-form-submit" type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <div><ControlledInput /></div>,
    document.getElementById('new-card-form')
);