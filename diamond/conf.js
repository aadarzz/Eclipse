exports.config = {
		
		framework: 'custom',
		frameworkPath: require.resolve('protractor-cucumber-framework'),
		
		specs: ['src/features/feature.feature'],
		cucumberOpts: {
        //    tags: ['@TC03'],
			require: ['src/steps/steps.js','src/hooks/hooks.js'],
			format: 'json:reports/result.json'
		},
		
		multiCapabilities: [{
			browserName: 'chrome',
			metadataKey: 'deviceProperties',
			
			shardTestFiles: true,
			maxInstances: 1,
			chromeOptions: {
				args: ['disable-infobars'],
				
				
			},
			
			metadataKey: 'misc',
			metadata: {
				
				browser: {
					name: 'Chrome',
					version: '60.0.3112.113'
						
				},
				misc: {
					name:'misc'
				},
				device: 'Desktop',
				platform: {
					name: 'Windows',
					version: '11'
				}
			},
			detach:true
		}
		
		],
		
		plugins: [{
			package: 'protractor-multiple-cucumber-html-reporter-plugin',
			options:{
				automaticallyGenerateReport: true,
				removeExistingJsonReportFile: true,
				removeOriginalJsonReportFile: true,
				OpenReportInBrowser: true,
				
			}
		}],
		onPrepare: function() {
		    browser.manage().timeouts().setScriptTimeout(500000);
		   
		  },
		  
  
};