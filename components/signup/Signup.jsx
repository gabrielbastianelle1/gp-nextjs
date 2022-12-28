import { SignupSvg } from '../svgs'
import Form from './Form'

export default function Signup() {
    return (
        <main className="flex-grow grid lg:grid-cols-2 items-center bg-userBackground">
            <span className="hidden lg:flex items-center justify-center">
                <SignupSvg className="" />
            </span>
            <div className="flex justify-center">
                <Form />
            </div>
        </main>
    )
}
