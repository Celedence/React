function mood(){
    const moods = ['angry','sad','happy','hungry'];
    return moods [Math.floor(Math.random() *moods.length)];
}


class Hello extends React.Component {
    render(){
        return (
        <div>
            <h1>My mood is {mood()}</h1>
        </div>
        );
    }
}

// function Hello() {
//     return (
//         <div>
//             <h1>Hello!!! there</h1>
//             <h1>Hello there</h1>
//             <h1>Hello there</h1>
//         </div>
//     );
// }



ReactDOM.render(<Hello/>, document.getElementById('root'));