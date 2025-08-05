import TopBar from "@/pages/LandingPage/components/TopBar"
function LandingPage() {
  return (
    <>
      <TopBar />
      <div className="landing-page">
        <div>Top Header</div>
        <h1>Welcome to the Landing Page</h1>
        <p>This is the main entry point of our application.</p>
      </div>
    </>
  );
}

export default LandingPage;