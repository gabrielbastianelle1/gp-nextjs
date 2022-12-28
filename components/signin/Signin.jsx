import { Landpage, SigninSvg } from '../svgs'
import Form from './Form'

export default function Signin() {
    return (
        <main className="flex-grow grid lg:grid-cols-2 items-center bg-userBackground">
            <span className="hidden lg:flex items-center justify-center">
                <SigninSvg className="scale-150" />
            </span>
            <div className="flex justify-center">
                <Form />
            </div>
        </main>
    )
}
