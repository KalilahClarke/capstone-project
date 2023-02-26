//CSS
import "./Testimonials.css";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonial-one">
                <img className = 'testimonial__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSECqXIHtJOST_QdstjQolhhQ396OhZ4eQAUw&usqp=CAU" alt="mela"/>
                <h3>Mela Stark</h3>
                <p>"I live in NYC alone so I am glad that this website exists and I can get the help I need quickly. I've received so much help from amazing volunteers and plan on continuing to use this website."</p>
            </div>
            <div className="testimonial-two">
                <img  className = 'testimonial__img'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtFFVWqMfDDAAhXxcxxkNIl0I6CUsbqocSA&usqp=CAU" alt="finn"/>
                <h3>Finn Styles</h3>
                <p>"When I first heard about this site it reminded me of my grandfather who I loved helping out when I was younger. So I love being able to offer my help to others. We all get older someday!"</p>
            </div>
            <div className="testimonial-three">
                <img className = 'testimonial__img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNpSMMXKJY41wyVfASyOb4ritj9_tZPT43VA&usqp=CAU" alt="bailey"/>
                <h3>Bailey Cruz</h3>
                <p>"I love helping people so whenever I have free time, I login to the site and try to pick up a task. I try to do a task everyday since I know I am helping seniors who really need it. It's the best part of my day!"</p>
            </div>
            <div className="testimonial-four">
                <img className = 'testimonial__img'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTOcVt1LXMpKrBQrZVDFnjtaN9PZlC-UIrlg&usqp=CAU" alt="melvin"/>
                <h3>Melvin Rabinowitz</h3>
                <p>"Before I found this easy to use website, I was struggling. I don't have much family or friends around but thanks to GoldenSolutions I have a new family, their army of friendly volunteers."</p>
            </div>
        </div>
    );
};

export default Testimonials;