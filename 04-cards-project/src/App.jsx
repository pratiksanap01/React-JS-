import Card from './components/Card'

const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG12.png",
      companyName: "Meta",
      datePosted: "5 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$65/hour",
      location: "Menlo Park, USA"
    },
    {
      brandLogo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
      companyName: "Amazon",
      datePosted: "2 weeks ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
      companyName: "Apple",
      datePosted: "3 weeks ago",
      post: "iOS Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$90/hour",
      location: "Cupertino, USA"
    },
    {
      brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      datePosted: "10 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hour",
      location: "Los Gatos, USA"
    },
    {
      brandLogo: "data:image/png;base64,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",
      companyName: "Google",
      datePosted: "1 week ago",
      post: "Cloud Solutions Architect",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$85/hour",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://download.logo.wine/logo/Microsoft_Store/Microsoft_Store-Logo.wine.png",
      companyName: "Microsoft",
      datePosted: "4 weeks ago",
      post: "Data Scientist",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hour",
      location: "Redmond, USA"
    },
    {
      brandLogo: "https://1000logos.net/wp-content/uploads/2017/02/Color-IBM-Logo.jpg",
      companyName: "IBM",
      datePosted: "2 days ago",
      post: "AI Research Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$95/hour",
      location: "New York, USA"
    },
    {
      brandLogo: "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
      companyName: "Tesla",
      datePosted: "6 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$80/hour",
      location: "Austin, USA"
    },
    {
      brandLogo: "https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/nvidia-og-image-white-bg-1200x630.jpg",
      companyName: "NVIDIA",
      datePosted: "3 weeks ago",
      post: "GPU Programmer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$120/hour",
      location: "Santa Clara, USA"
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnOVjTWaheo4E99cgYZ6y14tpsgHlm0VN8Hw&s",
      companyName: "Oracle",
      datePosted: "8 days ago",
      post: "Database Administrator",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$70/hour",
      location: "Mumbai, India"
    }
  ];


  return (
    <div className='parent'>
      {jobOpenings.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.companyName} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App