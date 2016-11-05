import React from 'react';
import moment from 'moment';

function daysLeft(date) {
  const now = moment();
  const future = moment(date);
  return moment.duration(future.diff(now))._data;
}

class TimeLeftTo extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      years: '',
      months: '',
      days: '',
      hours: '',
      minutes: '',
      seconds: '',
    };
  }

  componentWillMount() {
    const that = this;
    const future = new Date(that.props.params.date);
    function delay() {
      that.tick = setTimeout(() => {
        const { years, months, days, hours, minutes, seconds } = daysLeft(future);
        that.setState({
          years: years ? [years, 'y'].join('') : '',
          months: months ? [months, 'm'].join('') : '',
          days: days ? [days, 'd'].join('') : '',
          hours: hours ? [hours, 'h'].join('') : '',
          minutes: minutes ? [minutes, 'm'].join('') : '',
          seconds: seconds ? [seconds, 's'].join('') : '',
        });
        delay();
      }, 1000);
    }
    delay();
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    const { label } = this.props.params;
    const { years, months, days, minutes, hours, seconds } = this.state;
    return (
      <div className="App">
        <h1>{label}</h1>
        {years} {months} {days} {hours} {minutes} {seconds}
      </div>
    );
  }
}

TimeLeftTo.propTypes = {
  params: React.PropTypes.object,
};

export default TimeLeftTo;
