import React, { useState, useEffect } from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutProject = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="position-relative py-5"
      style={{
        background: "linear-gradient(315deg, #36dd78 30%, #1fc6eb 74%)",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Floating Background Effect
      <div
        className="position-absolute w-100"
        style={{
          height: "300px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 10%, rgba(0,0,0,0) 80%)",
          borderRadius: "50%",
          top: `${scrollY * 0.3}px`,
          left: `${scrollY * 0.2}px`,
          transform: `translate(-50%, -50%)`,
          transition: "transform 0.2s ease-out",
        }}
      ></div> */}

      <Container maxWidth="lg">
        <Paper elevation={3} className="p-4 rounded-3 mb-4">
          <Typography variant="h4" align="center" gutterBottom>
            The Thought Process Behind This Project
          </Typography>
          <Typography variant="body1" align="center">
            This project technically started the moment Apple released the
            calculator app on the iPad. Before that, I thought calculators were
            just complete. But when I saw that app, something clicked.
          </Typography>
        </Paper>

        {/* Problem Discovery */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} className="p-3 rounded-3">
              <Typography variant="h5" gutterBottom>
                The Moment of Realization
              </Typography>
              <Typography variant="body1">
                I realized that just because something is done a certain way,
                doesn’t mean it’s the best way. That’s when I started my quest:
                to find a better calculator than the ones available on PC.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} className="p-3 rounded-3">
              <Typography variant="h5" gutterBottom>
                Initial Struggles
              </Typography>
              <Typography variant="body1">
                I threw around ideas—AI, optimization, accessibility—but
                everything felt impractical or out of reach. I realized I was
                brainstorming without direction. So, I stepped back and asked:
                Why do calculators work the way they do?
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Inspiration from Apple */}
        <Paper elevation={3} className="p-4 rounded-3 my-4">
          <Typography variant="h5" gutterBottom>
            Learning from Apple’s Philosophy
          </Typography>
          <Typography variant="body1">
            Apple focuses on effortless user experience—a phone unlocks with a
            glance, a laptop thats ready to roll every time you open it, a
            calculator feels as natural as doing calculations on paper when used
            with ipad. That’s when I set my goal: Design a calculator that’s
            more intuitive and effortless to use than conventional ones.
          </Typography>
        </Paper>

        {/* The Real Problem */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} className="p-3 rounded-3">
              <Typography variant="h5" gutterBottom>
                The Real Issue with Calculators
              </Typography>
              <Typography variant="body1">
                Most calculator apps assume everyone has a full-sized keyboard.
                But today? Laptops are smaller, 60% keyboards are common, and
                yet… No one has optimized for this change.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={2} className="p-3 rounded-3">
              <Typography variant="h5" gutterBottom>
                Why It Matters
              </Typography>
              <Typography variant="body1">
                Try using a calculator with just your keyboard—it’s frustrating.
                You need both hands, and if you’re tracking numbers across
                documents, it’s even worse. This needed to change.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* The Solution */}
        <Paper elevation={3} className="p-4 rounded-3 my-4">
          <Typography variant="h5" gutterBottom>
            The Direction I Took
          </Typography>
          <Typography variant="body1">
            I designed a calculator that works smoothly on any keyboard
            format—no matter if you’re on a full-sized keyboard, a laptop, or
            even a compact layout. Accessibility was the core focus.
          </Typography>
        </Paper>

        {/* Final Thoughts */}
        <Grid container spacing={0}>
          <Grid item xs={12} md={6}>
            <Paper elevation={2} className="p-3 rounded-3">
              <Typography variant="h5" gutterBottom>
                What’s Next?
              </Typography>
              <Typography variant="body1">
                This is just the beginning. Next steps include building Backend,
                branding (logo),naming domain, monetization (revenue streams),
                and marketing(ie like motto,slogan,naming,). The journey isn’t
                over.
                39de2ae6435e0162211ad5f987e0c9f60fecca51b6bae6c12d7abc23e1f32b3b
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Closing Message */}
        <Paper elevation={3} className="p-4 rounded-3 mt-4">
          <Typography variant="h4" align="center" gutterBottom>
            "I'm glad I looked in a direction everyone ignored. It was worth
            it."
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default AboutProject;
