module.exports= module.exports = {
    // An array of folders (excluding subfolders) where your tests are located;
    // if this is not specified, the test source must be passed as the second argument to the test runner.
    src_folders: ["tests"],
    
    webdriver: {
      start_process: true,
     // port: ,
      server_path: "node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
      cli_args: [
        // very verbose geckodriver logs
        // '-vv'
      ]
    },
    
    test_settings: {
      default: {
        launch_url: 'https://nightwatchjs.org',
        desiredCapabilities : {
          browserName : 'chrome'
        }
      }
    }
  };