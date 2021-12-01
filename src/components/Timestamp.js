function timestamp(props) {
    return (
          <div className="timestamp">
            <Timestamp time={props.tweet.timestamp} />
          </div>
    );
  }
  export default timestamp