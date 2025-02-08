import React from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

const MuiBootstrapSection = () => {
  return (
    <div
      className="py-5"
      style={{
        background: "linear-gradient(315deg, #36dd78 30%, #1fc6eb 74%)",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="xl" className="py-4">
        {/* Header Section */}

        {/* Main Content Grid */}
        <Grid container spacing={4}>
          {/* CTA Section */}
          <Grid item xs={12}>
            <Paper
              elevation={3}
              className="p-4"
              style={{
                background: "linear-gradient(315deg, #36dd78 30%, #1fc6eb 74%)",
                borderRadius: "12px",
              }}
            >
              <div
                className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 "
                style={{ backgroundColor: "10 101 10 0.4" }}
              >
                <div className="text-white">
                  <Typography
                    variant="h4"
                    className="mb-2"
                    style={{ textAlign: "center" }}
                  >
                    Ready to Get Started?
                  </Typography>
                  <Typography style={{ fontSize: "30px" }}>
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your businesswith our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                    Transform your business with our expertise Transform your
                    business with our expertise Transform your business with our
                    expertise Transform your business with our expertise
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MuiBootstrapSection;
