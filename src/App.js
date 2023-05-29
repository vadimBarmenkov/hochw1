import React, {useState} from 'react';
import moment from "moment";

function DateTime(props) {
  return (
      <p className="date">{props.date}</p>
  )
}

const DateTimePretty = WrappedComponent => class NewComponent extends React.Component {


  render() {
    const time = moment(this.props.date);
    const timeNow = moment(new Date);
    const differentTime = Math.floor(timeNow.diff(time) / 60000);
    let date;
    if (differentTime < 60){
      date = differentTime + " минут назад";
    }else if (differentTime < 1440){
      date = Math.floor(differentTime / 60) + " часов назад";
    } else {
      date = Math.floor(differentTime / 1440) + " дней назад";
    }
    console.log();
    return(
        <div>
          <WrappedComponent date={date}/>
        </div>
    );
  }
};

function Video(props) {
  const DateTimeWithPretty = DateTimePretty(DateTime);
  return (
      <div className="video">
        <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <DateTimeWithPretty {...props}/>
      </div>
  )
}

function VideoList(props) {
  return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
  const [list, setList] = useState([
    {
      url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2017-07-31 13:24:00'
    },
    {
      url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-03-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-02-03 23:16:00'
    },
    {
      url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2018-01-03 12:10:00'
    },
    {
      url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-05-29 13:17:00'
    },
    {
      url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
      date: '2023-05-02 05:24:00'
    },
  ]);

  return (
      <>
        <VideoList list={list} />
      </>
  );
}