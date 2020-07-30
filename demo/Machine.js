class Machine extends React.Component {
    render() {
        const {s1, s2, s3} = this.props;
        const winner = (s1 === s2) && (s2 === s3);

        return (
          <div>
              <p>{this.props.s1} {this.props.s2} {this.props.s3}</p>  
              <p>{winner ? 'Winner' : 'Loser!'}</p>
          </div>
        );
    }
}





