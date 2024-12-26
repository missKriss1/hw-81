import {useState} from "react";
import {LinkWithoutIdAndShirtUrl} from "../types";
import {useAppDispatch, useAppSelector} from "../app/hook.ts";
import {loading, selectLink} from "./linksSlice.ts";
import {sendingOriginalUrl} from "./linksThunk.ts";
import Spinner from "../components/Spinner.tsx";

const HomeLinks = () => {
    const [form, setForm] = useState<LinkWithoutIdAndShirtUrl>({
        originalUrl: ''
    })
    const links = useAppSelector(selectLink);
    const dispatch = useAppDispatch();
    const loadingSpinner = useAppSelector(loading)

    const onImnputCange =(e: React.ChangeEvent<HTMLInputElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const onsubmitForm = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(sendingOriginalUrl(form))

    }
    return (
        <div className="text-center p-4 mt-5">
            <h1 className="mb-4">Shorten your link!</h1>
            <form onSubmit={onsubmitForm} className="d-flex justify-content-center">
                <input
                    onChange={onImnputCange}
                    className="form-control mr-2"
                    type="text"
                    name='originalUrl'
                    id='originalUrl'
                    value={form.originalUrl}
                    placeholder="Enter your link"
                    style={{ maxWidth: '400px' }}
                />
                <button
                    className="btn btn-primary m-lg-3"
                    style={{ maxWidth: '150px' }}
                    type="submit"
                >
                    Shorten
                </button>
            </form>

            <h4 className='mt-5'>Your link noe looks like this:</h4>


            {loadingSpinner ? (
                <Spinner></Spinner>
            ):(
                <>
                    {links === null ? null :
                        <div className='mt-5'>
                            <a  href={links.shortUrl}>http://localhost:8000/{links.shortUrl}</a>
                        </div>
                    }
                </>
            )}

        </div>
    );
};

export default HomeLinks;
