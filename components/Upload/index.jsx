import styles from './upload.module.css'

const Upload = () => {
    const handleFileUploadClick = () => {
        document.getElementById('fileInput').click();
    }

    const handleFileUpload = (event) => {
        const element = document.querySelector('#empty-room');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div className="my-32">
            <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8'>

                <div className="mx-auto max-w-4xl pt-5">
                    <div className="sm:flex items-center mx-5 p-5 sm:p-0 rounded-xl justify-between bg-lightgrey sm:rounded-full">
                        <div className={styles.UploadInput}>
                            <input type="file" id="fileInput" className="hidden" onChange={handleFileUpload}/>
                            <input type="text" className="my-4 py-4 sm:pl-6 lg:text-xl text-black sm:rounded-full bg-lightgrey pl-1 focus:outline-none bg-emailbg focus:text-black" placeholder="Please upload a picture of your room" autoComplete="off" onClick={handleFileUploadClick} />
                        </div>
                        <div className="sm:mr-3">
                            <button onClick={handleFileUpload} type="submit" className="joinButton w-full sm:w-0 text-xl text-white font-semibold text-center rounded-xl sm:rounded-full bg-blue hover:bg-btnblue">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Upload;
