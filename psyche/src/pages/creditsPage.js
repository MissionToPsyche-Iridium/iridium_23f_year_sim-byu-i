
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
                <p className="captionCSS">Jackson Westover - Computer Science Major, Machine Learning Emphasis</p>
            </div>
            <div className="PhotoItem">
                <img src={Bryer} alt="Description of 4" className="photoCSS" />
                <p className="captionCSS">Bryer Johnson - Software Engineering Major, Chiled Development Emphasis</p>
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

// TODO:: Previous Items on credits page ask team where these go. BB

{/* <div className="creditsContainerCSS">
<p>You can add credit info here</p>
<p>t_1 - <a href="https://science.howstuffworks.com/psyche-16-asteroid.htm#:~:text=Unlike%20most%20asteroids%2C%20which%20are,is%20%2410%2C000%20quadrillion%2C%20or%20%2410%2C000%2C000%2C000%2C000%2C000%2C000.">How Stuff Works</a></p>
<p>t_2 - <a href="https://www.walmart.com/ip/Pen-Gear-Copy-Paper-8-5-x-11-20-lb-White-500-Sheets/487634010?wmlspartner=wlpa&selectedSellerId=0&wl13=1878&gclsrc=aw.ds&adid=22222222277487634010_117755028669_12420145346&wl0=&wl1=g&wl2=c&wl3=501107745824&wl4=pla-394283752452&wl5=9029499&wl6=&wl7=&wl8=&wl9=pla&wl10=8175035&wl11=local&wl12=487634010&veh=sem_LIA&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAiA9IC6BhA3EiwAsbltOFZf0OUhMLneuu8IaRPvf_yyZQlnW96R_Qgy6tre8bhmpuYaZqrAuRoCmioQAvD_BwE"></a>Walmart</p>
<p>t_3 - <a href="https://www.usdebtclock.org/"></a>US Debt Clock</p>
<p>t_4 - <a href="https://millmanland.com/company-news/how-much-is-an-acre-of-land/#:~:text=The%20average%20value%20of%20an,United%20States%20is%20about%20%2412%2C000.">Millman Land</a></p>
<p>t_5 - <a href="https://www.ers.usda.gov/topics/farm-economy/land-use-land-value-tenure/major-land-uses/#:~:text=The%20U.S.%20land%20area%20covers%20nearly%202.26%20billion%20acres.">USDA.gov</a></p>
<p>t_6 - <a href="https://www.globenewswire.com/news-release/2021/05/06/2224758/0/en/The-value-of-Earth-s-natural-infrastructure-falls-to-33-quadrillion-says-environmental-study.html#:~:text=The%20analysis%2C%20completed%20by%20Environmental,is%20equivalent%20to%201%2C000%20trillion.">Globe News Wire</a></p>
<p>t_ - <a href=""></a></p>
<p>t_ - <a href=""></a></p>
<p>t_ - <a href=""></a></p>
<p>t_ - <a href=""></a></p>
<p>t_ - <a href=""></a></p>
<p>t_ - <a href=""></a></p>
</div> */}