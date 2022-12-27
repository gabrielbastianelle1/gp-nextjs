import Layout from '../components/firstLayout/Layout'
import LandPage from '../components/landpage/LandPage'

function Index() {
    fetch(`http://192.168.0.105:3000/api`)
    return (
        <Layout>
            <LandPage title="landpage" />
        </Layout>
    )
}
export default Index
