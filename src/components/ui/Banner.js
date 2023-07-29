

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/e0/67/62/e06762a17ae1edc5b0adb765a8cfc641.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Build Your Custom PC or Intel Gaming PC from Tech bd PC Builder. Visit Tech bd  shop or Order Online to get delivery Anywhere in BD.</p>
                    <button className="btn" style={{ background: '#32BD8F', color: 'white' }}>Get Started</button>
                </div>
            </div>
        </div>

    )
}

export default Banner