import React from 'react';

import styled, { createGlobalStyle, ThemeProvider as SCThemeProvider } from "styled-components";
import { createMuiTheme, MuiThemeProvider, StylesProvider } from "@material-ui/core/styles";

import { BrowserView, isBrowser, isAndroid, isIOS } from "react-device-detect";

import Header from './components/Header';
import Footer from './components/Footer';

const muiTheme = createMuiTheme({
  palette: {
    black: "#000000",
    grey1: "#464647",
    grey2: "#BFBFBF",
    grey3: "#DDDDDD",
    grey4: "#F6F7F7",
    mustard: "#FCBA15",
    rose: "#FF3274",
    green: "#61C9A9",
    darkBlue: "#1F08A6",
    primaryBlue: "#3542E4"
  }
});

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0px;
    padding: 0px;
    background: transparent;
    font-family: 'Nato Sans', sans-serif;
    font-size: 12px;

    #root {
      height: 100%;
      width: 100%;
    }
  }
`

const StyledApp = styled.div`
    min-width: 420px;
    overflow: hidden;
`

const Content = styled.div`
`

const SectionContent = styled.div`
    max-width: 1920px;
    margin: 0em auto;
    display: flex;
    flex-direction: column;
    position: relative;
`

const DownArrowWrapper = styled.a`
    display: flex;
    flex-direction: column;
    position: relative;
    bottom: 6em;
`

const DownArrowImage = styled.img`
`

const Section = styled.div`
    font-size: 1.5em;

    text-align: ${props => props.center ? "center" : "left"};

    p {
        line-height: 1.70em;
    }
    
    &#ourMission {
        background: url('./dashed-bg.png') top left repeat-x;
        padding: 4em 0em;
        background-position-x: calc(50% - 6em);
        
        ${props => props.theme.breakpoints.down("md")} {
            font-size: 1.3rem;
            background-image: none;
        }
    }
    
    &#features {
        background-color: ${props => props.theme.palette.mustard};
        padding: 3em 0em;

        p {
          padding: 0em 7em;
        }

        ${props => props.theme.breakpoints.down("md")} {
            font-size: 1.3rem;
            padding-bottom: 10em;
        }
    }

    &#doYourPart {
        background: url('./dashed-bg.png') top left repeat-x;
        padding: 2em 0em;
        background-position-x: calc(50% - 35em);
        background-position-y: 4em;
    
        ${props => props.theme.breakpoints.down("md")} {
            background-color: ${props => props.theme.palette.grey4};
            background-image: none;

            ${SectionContent} {
                flex-direction: column-reverse;
            }
        }
    }

    &#partners {
        background-color: ${props => props.theme.palette.grey4};
        padding: 4em 0em;
        
        p {
          a {
            text-decoration: none;
          }
        }

        ${props => props.theme.breakpoints.down("md")} {
            background-color: inherit;
        }
    }
`

const OurMissionText = styled.div`
    width: 40%;
    max-width: 500px;
    margin: 6.5em 10em;

    ${props => props.theme.breakpoints.down("md")} {
        margin: 200px 2em 2em 2em;
        width: auto;
        max-width: 100%;
    }
`

const OurMissionImage = styled.img`
    position: absolute;
    top: calc(50% - 15vw);
    right: 5em;
    height: 30vw;

    ${props => props.theme.breakpoints.down("md")} {
        height: 360px;
        top: -200px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
    }
`

const FeatureIcon = styled.img`

`

const DoYourPartText = styled.div`
    width: 40%;
    max-width: 700px;
    margin: 6.5em 10em;
    
    ${props => props.theme.breakpoints.down("md")} {
        font-size: 1.3rem;
        margin: 5em 2em 2em 2em;
        width: auto;
        max-width: 100%;
        text-align: center;
    }
`

const DoYourPartImage = styled.img`
    position: absolute;
    bottom: -2em;
    right: 4em;
    height: 30vw;
    max-height: 500px;

    ${props => props.theme.breakpoints.down("md")} {
        position: relative;
        width: 128vw;
        height: auto;
        max-height: none;
        min-width: 520px;
        margin-top: -10em;
    }
`

const SectionHeader = styled.h2`
    font-family: 'Montserrat';
    font-size: 2.75rem;
    font-weight: 100;
`

const TopSection = styled.div`
    background-color: ${props => props.theme.palette.primaryBlue};
    color: ${props => props.theme.palette.grey4};
    height: 100vh;
    min-height: 950px;
    max-height: 1200px;
`

const TopSectionContent = styled.div`
    max-width: 1920px;
    margin: 0em auto;
    display: flex;
    justify-content: space-between;
    padding: 0em 10em;
    
    ${props => props.theme.breakpoints.down("md")} {
        padding: 0em 1em 12em 1em;
    }
`

const MiddleContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    margin-top: 15em;
    
    ${props => props.theme.breakpoints.down("md")} {
        margin-top: 4em;
    }

    p {
        width: 400px;
        text-align: center;
        margin: 1.5em 0em;
        line-height: 1.8em;
        font-size: 2em;

        ${props => props.theme.breakpoints.down("md")} {
            width: 200px;
            font-size: 1.5em;
            line-height: 1.5em;
        }
    }

    strong {
        font-size: 1.6em;
        margin: 1em 0em;
        
        ${props => props.theme.breakpoints.down("md")} {
            font-size: 1.4em;
        }
    }
`

const Logo = styled.img`
    margin-bottom: 1em;
    
    ${props => props.theme.breakpoints.down("md")} {
        width: 100px;
    }
`

const MobileDownloadButtons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
`

const MobileDownloadButton = styled.a`
    margin: 0em 2em;
`

const MobileDownloadImage = styled.img`
    height: 3.5vw;
    
    ${props => props.theme.breakpoints.down("md")} {
        height: 64px;
    }
`

const Person = styled.img`
    height: 620px;
    margin-top: 15em;
    margin-bottom: 13em;

    ${props => props.theme.breakpoints.down("md")} {
        display: none;
    }
`

const FeaturesContent = styled.div`
    display: flex;
    flex-direction: row;
    
    ${props => props.theme.breakpoints.down("md")} {
        flex-direction: column;
    }
`

const Feature = styled.div`
    text-align: center;
    margin: 0em 3em;

    p {
      max-width: 54vh;
    }
    
    ${props => props.theme.breakpoints.down("md")} {
        margin: 1em 1em;
    }
`

// const Partners = styled.div`
//     display: flex;
//     justify-content: center;
//     margin: 1em 0em;
// `

const Partner = styled.div`
    width: 250px;
    height: 100px;
    background-color: #FFF;
    margin: 0em 2em;
    
    ${props => props.theme.breakpoints.down("md")} {
        background-color: ${props => props.theme.palette.grey4};
        display: none;

        &:first-of-type {
            display: block;
        }
    }
`

function App() {
  const iOSUrl = 'https://www.apple.com/ios/app-store/';
  const androidUrl = 'https://play.google.com/';

  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={muiTheme}>
        <SCThemeProvider theme={muiTheme}>
          <GlobalStyle />
          <StyledApp>
            <Content>
              <TopSection>
                <Header />
                <TopSectionContent>
                  <Person src="./person-1@2x.png"></Person>
                  <MiddleContent>
                    <Logo src="./flaat-logo.svg" />
                    <p>
                      Let’s work together to flatten the  curve of Covid-19 in Canada.
                                        </p>
                    <strong>Coming Soon April 2020 on:</strong>
                    <MobileDownloadButtons>
                      {(isBrowser || isIOS) && (
                        <MobileDownloadButton href={iOSUrl}>
                          <MobileDownloadImage src="./ios-download@2x.png" />
                        </MobileDownloadButton>
                      )}
                      {(isBrowser || isAndroid) && (
                        <MobileDownloadButton href={androidUrl}>
                          <MobileDownloadImage src="./android-download@2x.png" />
                        </MobileDownloadButton>
                      )}
                    </MobileDownloadButtons>
                  </MiddleContent>
                  <Person src="./person-2@2x.png"></Person>
                </TopSectionContent>
              </TopSection>
              <DownArrowWrapper href="#ourMission">
                <DownArrowImage src="./down-arrow.svg"></DownArrowImage>
              </DownArrowWrapper>
              <Section id="ourMission">
                <SectionContent>
                  <OurMissionText>
                    <BrowserView>
                      <SectionHeader>Our Mission</SectionHeader>
                      <p>
                        Flaat has been created to promote the safety of Canadians and to flatten the curve of COVD-19.
                        By leveraging mobile phone capabilities – opt-in location sharing and bluetooth sharing – Flaat is able to proactively identify high risk Covid-19 locations in Canada.
                        By doing so, the FLAAT app will help Canadians avoid areas of concern and also notify Canadians if they have possibly been exposed to COVID-19. <br></br><br></br>
                        The app uses anonymized location data and works to protect non-infected Canadians by identifying mobile device(s) that may have been in close proximity to an infected person.
                      </p>
                    </BrowserView>
                  </OurMissionText>
                  <OurMissionImage src="./person-3.png" />
                </SectionContent>
              </Section>
              <Section id="features">
                <SectionContent>
                  <FeaturesContent>
                    <Feature>
                      <FeatureIcon src="./icon-bars.png" />
                      <SectionHeader>Smart Data</SectionHeader>
                      <p>
                        FLAAT will collect and process a lot of data which can be used for intelligent predictive modelling and to flatten the curve.
                        The data collected is anonymized and encrypted; if data is required for reporting purposes, users are asked for permission.
                      </p>
                    </Feature>
                    <Feature>
                      <FeatureIcon src="./icon-bell.png" />
                      <SectionHeader>Risk Notifications</SectionHeader>
                      <p>
                        FLAAT can proactively notify users - via opt-on push notifications - who have been in high risk areas. These notifications may help users flatten the curve.
                      </p>
                    </Feature>
                  </FeaturesContent>
                </SectionContent>
              </Section>
              <Section id="doYourPart">
                <SectionContent>
                  <DoYourPartText>
                    <SectionHeader>Do Your Part</SectionHeader>
                    <p>
                      More than ever, we need Canadian’s to do their part, even those in quarantine provide valuable insights through location awareness.
                    </p>
                  </DoYourPartText>
                  <DoYourPartImage src="./hand.png" />
                </SectionContent>
              </Section>
              <Section id="partners" center>
                <SectionContent>
                  <SectionHeader>Our Partners</SectionHeader>
                  <p>
                    Thank you to all who continue to support Flaat. If you are looking to partner with us please email <a href="mailto:inquiry@flaat.io">inquiry@flaat.io</a>
                  </p>
                  {/* <Partners>
                    <Partner />
                    <Partner />
                    <Partner />
                    <Partner />
                    <Partner />
                  </Partners> */}
                </SectionContent>
              </Section>
            </Content>
            <Footer />
          </StyledApp>
        </SCThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
