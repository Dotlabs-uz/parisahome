
import FAQ from './FAQ';
import { getData } from '@/lib/https.request';

const FAQcon = async ({ faqTitle }: any) => {
    const question = await getData('/question')

    if (question.status === 500) {
        return null;
    }
    
    return (
        <div className="custom-container">
            <div className="py-20 max-md:py-10 max-sm:py-5 rounded-3xl shadow-md bg-white">
                <FAQ faqTitle={faqTitle} data={question} />
            </div>
        </div>
    )
}

export default FAQcon
