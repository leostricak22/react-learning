function Car() {
    let random_color = ["red","green","blue"][Math.floor(Math.random() * (3))];
    return <h2 className={random_color}>Hi, I am a {random_color} Car!</h2>;
}

export default Car;