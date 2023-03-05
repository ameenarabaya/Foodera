import './question.css'
function Question() {
    return (
        <div className="container test">
            <h3 className="title">Frequently Asked Questions</h3>
            <div className="Question d-flex gap-4">
                <div className="part_one d-flex flex-column">
                    <div className="Q1">
                        <p className='Qu'>~ Is Foodera Bread really baked fresh each day?</p>
                        <p className='Answ'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="Q2">
                        <p className='Qu'>~ Can I order your products online?</p>
                        <p className='Answ'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
                <div className="part_two d-flex flex-column">
                    <div className="Q3">
                        <p className='Qu'>~ Do you bake breads containing animal fats or products?</p>
                        <p className='Answ'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                    <div className="Q4">
                        <p className='Qu'>~ When are you opening a shop near me?</p>
                        <p className='Answ'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Question;