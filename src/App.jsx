import Content from "./components/Content"

function App() {

  return (
    <>

      <Content colums="12">
        <h1>
          Build stronger digital connections
        </h1>
        <p>
          Use our URL shortener, QR Codes, and Link-in-bio pages 
          to engage your audience and connect them to the right information. 
          Build, edit, and track everything
          inside the Bitly Connections Platform.  
        </p>

        <button>
          Get strted for Free
        </button>
      </Content>

      <Content colums="12">
        <h2>
          Sign up for free and discover exclusive  content
        </h2>
        <h2>
          Don't miss out on this opportunity!
        </h2>

        <h2>
          Smaller link 
        </h2>
        <form>
          <input placeholder='put your link'/>
          <button> Get it</button>
        </form>
        <button> Smaller </button>
        <button> Code Qr </button>
      </Content>

      <Content colums="12">
        <h2> Our Benefits </h2>

        <div>
          <h2>Easy to use</h2>
          <p>
            Shorter links are easier to share and remember, 
            making it easier to communicate across different
            platforms and contexts.
          </p>
        </div>

        <div>
          <h2>Monitoring/analysis</h2>
          <p>
          We offer analysis tools that allow 
          you to track how many times 
          the link is clicked, when and from where, 
          providing valuable information
          </p>
        </div>

        
        <div>
          <h2>Space optimization</h2>
          <p>
            On platforms with limits of
            characters, like Twitter, short links allow 
            you to make the most of the available space.
          </p>
        </div>

        
        <div>
          <h2>Aesthetics/cleanliness</h2>
          <p>
            Short links give a neater, 
            cleaner look in text messages, 
            social media, and emails, 
            preventing long links from cluttering content.
          </p>
        </div>
      </Content>
    </>
  )
}

export default App
