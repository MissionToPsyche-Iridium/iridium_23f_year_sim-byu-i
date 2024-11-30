
import Thomas from './creditImages/MaryAnn and I.jpg';
import Carter from './creditImages/CarterBosen.JPG';
import Jackson from './creditImages/240206_JacksonWestover_01.jpg';
import Bryer from './creditImages/bryer_johnson.jpg';
import Brodie from './creditImages/brodie_busby.jpg';
import John from './creditImages/John_wursten.jpg';
import './../componentsCSS/credits.css'; 



const CreditsPage = () => (
    
    <div className="credisContainerCSS">
        
        <div className="photoGallery">
            <div className="PhotoItem">
                <img src={Thomas} alt="Thomas and Wife" className="photoCSS" />
                <p className="captionCSS">Thomas Jamieson - Computer Science Major, Electrical and Computer Engineering Minor</p>
            </div>
            <div className="PhotoItem">
                <img src={Carter} alt="Description of 2" className="photoCSS" />
                <p className="captionCSS">Carter Bosen - Computer Science Major</p>
            </div>
            <div className="PhotoItem">
                <img src={Jackson} alt="Description of 3" className="photoCSS" />
                <p className="captionCSS">Jackson Westover - Computer Science Major, Emphasis in Machine Learning</p>
            </div>
            <div className="PhotoItem">
                <img src={Bryer} alt="Description of 4" className="photoCSS" />
                <p className="captionCSS">Bryer Johnson - Software Engineering Major, Emphasis in Child Development</p>
            </div>
            <div className="PhotoItem">
                <img src={Brodie} alt="Description of 5" className="photoCSS" />
                <p className="captionCSS">Brodie Busby - Software Engineering Major</p>
            </div>
            <div className="PhotoItem">
                <img src={John} alt="Description of 6" className="photoCSS" />
                <p className="captionCSS">John Wursten - Computer Science Major</p>
            </div>
        </div>
        <p>This work was created in partial fulfillment of Brigham Young University-Idaho Capstone Course “CSE 397″. The work is a result of the Psyche Student Collaborations component of NASA’s Psyche Mission (https://psyche.asu.edu). “Psyche: A Journey to a Metal World” [Contract number NNM16AA09C] is part of the NASA Discovery Program mission to solar system targets. Trade names and trademarks of ASU and NASA are used in this work for identification only. Their usage does not constitute an official endorsement, either expressed or implied, by Arizona State University or National Aeronautics and Space Administration. The content is solely the responsibility of the authors and does not necessarily represent the official views of ASU or NASA.</p>
    </div>
)
export default CreditsPage
