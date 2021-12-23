import React from "react";
import Number from "elements/Form/InputNumber";
import InputDate from "elements/Form/InputDate";
import Button from "elements/Button";
import { withRouter } from "react-router-dom";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };
  // componentDidMount() {
  //   const { data } = this.state;
  //   console.log(data);
  // }
  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    // Change From Input Date
    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    // Change Form Input Number
    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + +data.duration - 1)
      );
      this.setState({
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetail._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };
  render() {
    const { data } = this.state;
    const { itemDetail } = this.props;

    return (
      <div className="card card-bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 mb-4" style={{ color: "#1ABC9C" }}>
          ${itemDetail.price} &nbsp;
          <span className="text-gray-500 fw-light">per {itemDetail.unit}</span>
        </h5>
        <label htmlFor="duration">How long you will stay?</label>
        <Number
          max={30}
          suffix={" night"}
          isSuffixPlural
          onChange={this.updateData}
          name="duration"
          value={data.duration}
        />
        <label htmlFor="date">Pick a date</label>
        <InputDate onChange={this.updateData} name="date" value={data.date} />
        <h6 className="text-gray-500 fw-light">
          You Will Pay &nbsp;
          <span className="text-gray-900">
            ${itemDetail.price * data.duration} USD
          </span>{" "}
          &nbsp; per &nbsp;
          <span className="text-gray-900">
            {data.duration} {itemDetail.unit}
          </span>
        </h6>
        <div className="d-grid gap-2 mt-4">
          <Button
            className="btn"
            hasShadow
            isPrimary
            onClick={this.startBooking}
          >
            {" "}
            Continue to book{" "}
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);
