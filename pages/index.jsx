import Layout from '../components/firstLayout/Layout'
import LandPage from '../components/landpage/LandPage'
import { host } from '../services/host'

function Index() {
    fetch(`http://${host}:3000/api`)
    return (
        <Layout title="mydata">
            <LandPage title="landpage" />
        </Layout>
    )
}
export default Index
