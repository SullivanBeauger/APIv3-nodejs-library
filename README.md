# sendin_blue_api

SendinBlueApi - JavaScript client for sendin_blue_api
SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  | 
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 3.0.0
- Package version: 3.0.0
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://account.sendinblue.com/support](https://account.sendinblue.com/support)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install sendin_blue_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your sendin_blue_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('sendin_blue_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var SendinBlueApi = require('sendin_blue_api');

var defaultClient = SendinBlueApi.ApiClient.instance;

// Configure API key authorization: api-key
var api-key = defaultClient.authentications['api-key'];
api-key.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api-key.apiKeyPrefix['api-key'] = "Token"

var api = new SendinBlueApi.AccountApi()
api.getAccount().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.sendinblue.com/v3*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SendinBlueApi.AccountApi* | [**getAccount**](docs/AccountApi.md#getAccount) | **GET** /account | Get your account informations, plans and credits details
*SendinBlueApi.AttributesApi* | [**createAttribute**](docs/AttributesApi.md#createAttribute) | **POST** /contacts/attributes/{attributeCategory}/{attributeName} | Creates contact attribute
*SendinBlueApi.AttributesApi* | [**deleteAttribute**](docs/AttributesApi.md#deleteAttribute) | **DELETE** /contacts/attributes/{attributeCategory}/{attributeName} | Deletes an attribute
*SendinBlueApi.AttributesApi* | [**getAttributes**](docs/AttributesApi.md#getAttributes) | **GET** /contacts/attributes | Lists all attributes
*SendinBlueApi.AttributesApi* | [**updateAttribute**](docs/AttributesApi.md#updateAttribute) | **PUT** /contacts/attributes/{attributeCategory}/{attributeName} | Updates contact attribute
*SendinBlueApi.ContactsApi* | [**addContactToList**](docs/ContactsApi.md#addContactToList) | **POST** /contacts/lists/{listId}/contacts/add | Add existing contacts to a list
*SendinBlueApi.ContactsApi* | [**createAttribute**](docs/ContactsApi.md#createAttribute) | **POST** /contacts/attributes/{attributeCategory}/{attributeName} | Creates contact attribute
*SendinBlueApi.ContactsApi* | [**createContact**](docs/ContactsApi.md#createContact) | **POST** /contacts | Create a contact
*SendinBlueApi.ContactsApi* | [**createFolder**](docs/ContactsApi.md#createFolder) | **POST** /contacts/folders | Create a folder
*SendinBlueApi.ContactsApi* | [**createList**](docs/ContactsApi.md#createList) | **POST** /contacts/lists | Create a list
*SendinBlueApi.ContactsApi* | [**deleteAttribute**](docs/ContactsApi.md#deleteAttribute) | **DELETE** /contacts/attributes/{attributeCategory}/{attributeName} | Deletes an attribute
*SendinBlueApi.ContactsApi* | [**deleteContact**](docs/ContactsApi.md#deleteContact) | **DELETE** /contacts/{email} | Deletes a contact
*SendinBlueApi.ContactsApi* | [**deleteFolder**](docs/ContactsApi.md#deleteFolder) | **DELETE** /contacts/folders/{folderId} | Delete a folder (and all its lists)
*SendinBlueApi.ContactsApi* | [**deleteList**](docs/ContactsApi.md#deleteList) | **DELETE** /contacts/lists/{listId} | Delete a list
*SendinBlueApi.ContactsApi* | [**getAttributes**](docs/ContactsApi.md#getAttributes) | **GET** /contacts/attributes | Lists all attributes
*SendinBlueApi.ContactsApi* | [**getContactInfo**](docs/ContactsApi.md#getContactInfo) | **GET** /contacts/{email} | Retrieves contact informations
*SendinBlueApi.ContactsApi* | [**getContactStats**](docs/ContactsApi.md#getContactStats) | **GET** /contacts/{email}/campaignStats | Get the campaigns statistics for a contact
*SendinBlueApi.ContactsApi* | [**getContacts**](docs/ContactsApi.md#getContacts) | **GET** /contacts | Get all the contacts
*SendinBlueApi.ContactsApi* | [**getContactsFromList**](docs/ContactsApi.md#getContactsFromList) | **GET** /contacts/lists/{listId}/contacts | Get the contacts in a list
*SendinBlueApi.ContactsApi* | [**getFolder**](docs/ContactsApi.md#getFolder) | **GET** /contacts/folders/{folderId} | Returns folder details
*SendinBlueApi.ContactsApi* | [**getFolderLists**](docs/ContactsApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
*SendinBlueApi.ContactsApi* | [**getFolders**](docs/ContactsApi.md#getFolders) | **GET** /contacts/folders | Get all the folders
*SendinBlueApi.ContactsApi* | [**getList**](docs/ContactsApi.md#getList) | **GET** /contacts/lists/{listId} | Get the details of a list
*SendinBlueApi.ContactsApi* | [**getLists**](docs/ContactsApi.md#getLists) | **GET** /contacts/lists | Get all the lists
*SendinBlueApi.ContactsApi* | [**importContacts**](docs/ContactsApi.md#importContacts) | **POST** /contacts/import | Import contacts
*SendinBlueApi.ContactsApi* | [**removeContactFromList**](docs/ContactsApi.md#removeContactFromList) | **POST** /contacts/lists/{listId}/contacts/remove | Remove existing contacts from a list
*SendinBlueApi.ContactsApi* | [**requestContactExport**](docs/ContactsApi.md#requestContactExport) | **POST** /contacts/export | Export contacts
*SendinBlueApi.ContactsApi* | [**updateAttribute**](docs/ContactsApi.md#updateAttribute) | **PUT** /contacts/attributes/{attributeCategory}/{attributeName} | Updates contact attribute
*SendinBlueApi.ContactsApi* | [**updateContact**](docs/ContactsApi.md#updateContact) | **PUT** /contacts/{email} | Updates a contact
*SendinBlueApi.ContactsApi* | [**updateFolder**](docs/ContactsApi.md#updateFolder) | **PUT** /contacts/folders/{folderId} | Update a contact folder
*SendinBlueApi.ContactsApi* | [**updateList**](docs/ContactsApi.md#updateList) | **PUT** /contacts/lists/{listId} | Update a list
*SendinBlueApi.EmailCampaignsApi* | [**createEmailCampaign**](docs/EmailCampaignsApi.md#createEmailCampaign) | **POST** /emailCampaigns | Create an email campaign
*SendinBlueApi.EmailCampaignsApi* | [**deleteEmailCampaign**](docs/EmailCampaignsApi.md#deleteEmailCampaign) | **DELETE** /emailCampaigns/{campaignId} | Delete an email campaign
*SendinBlueApi.EmailCampaignsApi* | [**emailExportRecipients**](docs/EmailCampaignsApi.md#emailExportRecipients) | **POST** /emailCampaigns/{campaignId}/exportRecipients | Export the recipients of a campaign
*SendinBlueApi.EmailCampaignsApi* | [**getEmailCampaign**](docs/EmailCampaignsApi.md#getEmailCampaign) | **GET** /emailCampaigns/{campaignId} | Get campaign informations
*SendinBlueApi.EmailCampaignsApi* | [**getEmailCampaigns**](docs/EmailCampaignsApi.md#getEmailCampaigns) | **GET** /emailCampaigns | Return all your created campaigns
*SendinBlueApi.EmailCampaignsApi* | [**sendEmailCampaignNow**](docs/EmailCampaignsApi.md#sendEmailCampaignNow) | **POST** /emailCampaigns/{campaignId}/sendNow | Send an email campaign id of the campaign immediately
*SendinBlueApi.EmailCampaignsApi* | [**sendReport**](docs/EmailCampaignsApi.md#sendReport) | **POST** /emailCampaigns/{campaignId}/sendReport | Send the report of a campaigns
*SendinBlueApi.EmailCampaignsApi* | [**sendTestEmail**](docs/EmailCampaignsApi.md#sendTestEmail) | **POST** /emailCampaigns/{campaignId}/sendTest | Send an email campaign to your test list
*SendinBlueApi.EmailCampaignsApi* | [**updateCampaignStatus**](docs/EmailCampaignsApi.md#updateCampaignStatus) | **PUT** /emailCampaigns/{campaignId}/status | Update a campaign status
*SendinBlueApi.EmailCampaignsApi* | [**updateEmailCampaign**](docs/EmailCampaignsApi.md#updateEmailCampaign) | **PUT** /emailCampaigns/{campaignId} | Update a campaign
*SendinBlueApi.FoldersApi* | [**createFolder**](docs/FoldersApi.md#createFolder) | **POST** /contacts/folders | Create a folder
*SendinBlueApi.FoldersApi* | [**deleteFolder**](docs/FoldersApi.md#deleteFolder) | **DELETE** /contacts/folders/{folderId} | Delete a folder (and all its lists)
*SendinBlueApi.FoldersApi* | [**getFolder**](docs/FoldersApi.md#getFolder) | **GET** /contacts/folders/{folderId} | Returns folder details
*SendinBlueApi.FoldersApi* | [**getFolderLists**](docs/FoldersApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
*SendinBlueApi.FoldersApi* | [**getFolders**](docs/FoldersApi.md#getFolders) | **GET** /contacts/folders | Get all the folders
*SendinBlueApi.FoldersApi* | [**updateFolder**](docs/FoldersApi.md#updateFolder) | **PUT** /contacts/folders/{folderId} | Update a contact folder
*SendinBlueApi.ListsApi* | [**addContactToList**](docs/ListsApi.md#addContactToList) | **POST** /contacts/lists/{listId}/contacts/add | Add existing contacts to a list
*SendinBlueApi.ListsApi* | [**createList**](docs/ListsApi.md#createList) | **POST** /contacts/lists | Create a list
*SendinBlueApi.ListsApi* | [**deleteList**](docs/ListsApi.md#deleteList) | **DELETE** /contacts/lists/{listId} | Delete a list
*SendinBlueApi.ListsApi* | [**getContactsFromList**](docs/ListsApi.md#getContactsFromList) | **GET** /contacts/lists/{listId}/contacts | Get the contacts in a list
*SendinBlueApi.ListsApi* | [**getFolderLists**](docs/ListsApi.md#getFolderLists) | **GET** /contacts/folders/{folderId}/lists | Get the lists in a folder
*SendinBlueApi.ListsApi* | [**getList**](docs/ListsApi.md#getList) | **GET** /contacts/lists/{listId} | Get the details of a list
*SendinBlueApi.ListsApi* | [**getLists**](docs/ListsApi.md#getLists) | **GET** /contacts/lists | Get all the lists
*SendinBlueApi.ListsApi* | [**removeContactFromList**](docs/ListsApi.md#removeContactFromList) | **POST** /contacts/lists/{listId}/contacts/remove | Remove existing contacts from a list
*SendinBlueApi.ListsApi* | [**updateList**](docs/ListsApi.md#updateList) | **PUT** /contacts/lists/{listId} | Update a list
*SendinBlueApi.ProcessApi* | [**getProcess**](docs/ProcessApi.md#getProcess) | **GET** /processes/{processId} | Return the informations for a process
*SendinBlueApi.ProcessApi* | [**getProcesses**](docs/ProcessApi.md#getProcesses) | **GET** /processes | Return all the processes for your account
*SendinBlueApi.ResellerApi* | [**addCredits**](docs/ResellerApi.md#addCredits) | **POST** /reseller/children/{childAuthKey}/credits/add | Add Email and/or SMS credits to a specific child account
*SendinBlueApi.ResellerApi* | [**associateIpToChild**](docs/ResellerApi.md#associateIpToChild) | **POST** /reseller/children/{childAuthKey}/ips/associate | Associate a dedicated IP to the child
*SendinBlueApi.ResellerApi* | [**createChildDomain**](docs/ResellerApi.md#createChildDomain) | **POST** /reseller/children/{childAuthKey}/domains | Creates a domain for a child account
*SendinBlueApi.ResellerApi* | [**createResellerChild**](docs/ResellerApi.md#createResellerChild) | **POST** /reseller/children | Creates a reseller child
*SendinBlueApi.ResellerApi* | [**deleteChildDomain**](docs/ResellerApi.md#deleteChildDomain) | **DELETE** /reseller/children/{childAuthKey}/domains/{domainName} | Deletes the sender domain of the reseller child based on the childAuthKey and domainName passed
*SendinBlueApi.ResellerApi* | [**deleteResellerChild**](docs/ResellerApi.md#deleteResellerChild) | **DELETE** /reseller/children/{childAuthKey} | Deletes a single reseller child based on the childAuthKey supplied
*SendinBlueApi.ResellerApi* | [**dissociateIpFromChild**](docs/ResellerApi.md#dissociateIpFromChild) | **POST** /reseller/children/{childAuthKey}/ips/dissociate | Dissociate a dedicated IP to the child
*SendinBlueApi.ResellerApi* | [**getChildDomains**](docs/ResellerApi.md#getChildDomains) | **GET** /reseller/children/{childAuthKey}/domains | Gets all the sender domains of a specific child account
*SendinBlueApi.ResellerApi* | [**getChildInfo**](docs/ResellerApi.md#getChildInfo) | **GET** /reseller/children/{childAuthKey} | Gets the info about a specific child account
*SendinBlueApi.ResellerApi* | [**getResellerChilds**](docs/ResellerApi.md#getResellerChilds) | **GET** /reseller/children | Gets the list of all reseller&#39;s children accounts
*SendinBlueApi.ResellerApi* | [**getSsoToken**](docs/ResellerApi.md#getSsoToken) | **GET** /reseller/children/{childAuthKey}/auth | Get session token to access Sendinblue (SSO)
*SendinBlueApi.ResellerApi* | [**removeCredits**](docs/ResellerApi.md#removeCredits) | **POST** /reseller/children/{childAuthKey}/credits/remove | Remove Email and/or SMS credits from a specific child account
*SendinBlueApi.ResellerApi* | [**updateChildAccountStatus**](docs/ResellerApi.md#updateChildAccountStatus) | **PUT** /reseller/children/{childAuthKey}/accountStatus | Updates infos of reseller&#39;s child account status based on the childAuthKey supplied
*SendinBlueApi.ResellerApi* | [**updateChildDomain**](docs/ResellerApi.md#updateChildDomain) | **PUT** /reseller/children/{childAuthKey}/domains/{domainName} | Updates the sender domain of reseller&#39;s child based on the childAuthKey and domainName passed
*SendinBlueApi.ResellerApi* | [**updateResellerChild**](docs/ResellerApi.md#updateResellerChild) | **PUT** /reseller/children/{childAuthKey} | Updates infos of reseller&#39;s child based on the childAuthKey supplied
*SendinBlueApi.SMSCampaignsApi* | [**createSmsCampaign**](docs/SMSCampaignsApi.md#createSmsCampaign) | **POST** /smsCampaigns | Creates an SMS campaign
*SendinBlueApi.SMSCampaignsApi* | [**deleteSmsCampaign**](docs/SMSCampaignsApi.md#deleteSmsCampaign) | **DELETE** /smsCampaigns/{campaignId} | Delete the SMS campaign
*SendinBlueApi.SMSCampaignsApi* | [**getSmsCampaign**](docs/SMSCampaignsApi.md#getSmsCampaign) | **GET** /smsCampaigns/{campaignId} | Get an SMS campaign
*SendinBlueApi.SMSCampaignsApi* | [**getSmsCampaigns**](docs/SMSCampaignsApi.md#getSmsCampaigns) | **GET** /smsCampaigns | Returns the informations for all your created SMS campaigns
*SendinBlueApi.SMSCampaignsApi* | [**requestSmsRecipientExport**](docs/SMSCampaignsApi.md#requestSmsRecipientExport) | **POST** /smsCampaigns/{campaignId}/exportRecipients | Exports the recipients of the specified campaign.
*SendinBlueApi.SMSCampaignsApi* | [**sendSmsCampaignNow**](docs/SMSCampaignsApi.md#sendSmsCampaignNow) | **POST** /smsCampaigns/{campaignId}/sendNow | Send your SMS campaign immediately
*SendinBlueApi.SMSCampaignsApi* | [**sendSmsReport**](docs/SMSCampaignsApi.md#sendSmsReport) | **POST** /smsCampaigns/{campaignId}/sendReport | Send report of SMS campaigns
*SendinBlueApi.SMSCampaignsApi* | [**sendTestSms**](docs/SMSCampaignsApi.md#sendTestSms) | **POST** /smsCampaigns/{campaignId}/sendTest | Send an SMS
*SendinBlueApi.SMSCampaignsApi* | [**updateSmsCampaign**](docs/SMSCampaignsApi.md#updateSmsCampaign) | **PUT** /smsCampaigns/{campaignId} | Updates an SMS campaign
*SendinBlueApi.SMSCampaignsApi* | [**updateSmsCampaignStatus**](docs/SMSCampaignsApi.md#updateSmsCampaignStatus) | **PUT** /smsCampaigns/{campaignId}/status | Update the campaign status
*SendinBlueApi.SMTPApi* | [**createSmtpTemplate**](docs/SMTPApi.md#createSmtpTemplate) | **POST** /smtp/templates | Create a transactional email template
*SendinBlueApi.SMTPApi* | [**deleteHardbounces**](docs/SMTPApi.md#deleteHardbounces) | **POST** /smtp/deleteHardbounces | Delete hardbounces
*SendinBlueApi.SMTPApi* | [**deleteSmtpTemplate**](docs/SMTPApi.md#deleteSmtpTemplate) | **DELETE** /smtp/templates/{templateId} | Delete an inactive transactional email template
*SendinBlueApi.SMTPApi* | [**getAggregatedSmtpReport**](docs/SMTPApi.md#getAggregatedSmtpReport) | **GET** /smtp/statistics/aggregatedReport | Get your transactional email activity aggregated over a period of time
*SendinBlueApi.SMTPApi* | [**getEmailEventReport**](docs/SMTPApi.md#getEmailEventReport) | **GET** /smtp/statistics/events | Get all your transactional email activity (unaggregated events)
*SendinBlueApi.SMTPApi* | [**getSmtpReport**](docs/SMTPApi.md#getSmtpReport) | **GET** /smtp/statistics/reports | Get your transactional email activity aggregated per day
*SendinBlueApi.SMTPApi* | [**getSmtpTemplate**](docs/SMTPApi.md#getSmtpTemplate) | **GET** /smtp/templates/{templateId} | Returns the template informations
*SendinBlueApi.SMTPApi* | [**getSmtpTemplates**](docs/SMTPApi.md#getSmtpTemplates) | **GET** /smtp/templates | Get the list of transactional email templates
*SendinBlueApi.SMTPApi* | [**getTransacEmailContent**](docs/SMTPApi.md#getTransacEmailContent) | **GET** /smtp/emails/{uuid} | Get the personalized content of a sent transactional email
*SendinBlueApi.SMTPApi* | [**getTransacEmailsList**](docs/SMTPApi.md#getTransacEmailsList) | **GET** /smtp/emails | Get the list of transactional emails on the basis of allowed filters
*SendinBlueApi.SMTPApi* | [**sendTemplate**](docs/SMTPApi.md#sendTemplate) | **POST** /smtp/templates/{templateId}/send | Send a template
*SendinBlueApi.SMTPApi* | [**sendTestTemplate**](docs/SMTPApi.md#sendTestTemplate) | **POST** /smtp/templates/{templateId}/sendTest | Send a template to your test list
*SendinBlueApi.SMTPApi* | [**sendTransacEmail**](docs/SMTPApi.md#sendTransacEmail) | **POST** /smtp/email | Send a transactional email
*SendinBlueApi.SMTPApi* | [**updateSmtpTemplate**](docs/SMTPApi.md#updateSmtpTemplate) | **PUT** /smtp/templates/{templateId} | Updates a transactional email templates
*SendinBlueApi.SendersApi* | [**createSender**](docs/SendersApi.md#createSender) | **POST** /senders | Create a new sender
*SendinBlueApi.SendersApi* | [**deleteSender**](docs/SendersApi.md#deleteSender) | **DELETE** /senders/{senderId} | Delete a sender
*SendinBlueApi.SendersApi* | [**getIps**](docs/SendersApi.md#getIps) | **GET** /senders/ips | Return all the dedicated IPs for your account
*SendinBlueApi.SendersApi* | [**getIpsFromSender**](docs/SendersApi.md#getIpsFromSender) | **GET** /senders/{senderId}/ips | Return all the dedicated IPs for a sender
*SendinBlueApi.SendersApi* | [**getSenders**](docs/SendersApi.md#getSenders) | **GET** /senders | Get the list of all your senders
*SendinBlueApi.SendersApi* | [**updateSender**](docs/SendersApi.md#updateSender) | **PUT** /senders/{senderId} | Update a sender
*SendinBlueApi.TransactionalSMSApi* | [**getSmsEvents**](docs/TransactionalSMSApi.md#getSmsEvents) | **GET** /transactionalSMS/statistics/events | Get all the SMS activity (unaggregated events)
*SendinBlueApi.TransactionalSMSApi* | [**getTransacAggregatedSmsReport**](docs/TransactionalSMSApi.md#getTransacAggregatedSmsReport) | **GET** /transactionalSMS/statistics/aggregatedReport | Get your SMS activity aggregated over a period of time
*SendinBlueApi.TransactionalSMSApi* | [**getTransacSmsReport**](docs/TransactionalSMSApi.md#getTransacSmsReport) | **GET** /transactionalSMS/statistics/reports | Get your SMS activity aggregated per day
*SendinBlueApi.TransactionalSMSApi* | [**sendTransacSms**](docs/TransactionalSMSApi.md#sendTransacSms) | **POST** /transactionalSMS/sms | Send the SMS campaign to the specified mobile number
*SendinBlueApi.WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createWebhook) | **POST** /webhooks | Create a webhook
*SendinBlueApi.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhookId} | Delete a webhook
*SendinBlueApi.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{webhookId} | Get a webhook details
*SendinBlueApi.WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get all webhooks
*SendinBlueApi.WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updateWebhook) | **PUT** /webhooks/{webhookId} | Update a webhook


## Documentation for Models

 - [SendinBlueApi.AddChildDomain](docs/AddChildDomain.md)
 - [SendinBlueApi.AddContactToList](docs/AddContactToList.md)
 - [SendinBlueApi.AddCredits](docs/AddCredits.md)
 - [SendinBlueApi.CreateAttribute](docs/CreateAttribute.md)
 - [SendinBlueApi.CreateAttributeEnumeration](docs/CreateAttributeEnumeration.md)
 - [SendinBlueApi.CreateChild](docs/CreateChild.md)
 - [SendinBlueApi.CreateContact](docs/CreateContact.md)
 - [SendinBlueApi.CreateEmailCampaign](docs/CreateEmailCampaign.md)
 - [SendinBlueApi.CreateEmailCampaignRecipients](docs/CreateEmailCampaignRecipients.md)
 - [SendinBlueApi.CreateEmailCampaignSender](docs/CreateEmailCampaignSender.md)
 - [SendinBlueApi.CreateList](docs/CreateList.md)
 - [SendinBlueApi.CreateModel](docs/CreateModel.md)
 - [SendinBlueApi.CreateReseller](docs/CreateReseller.md)
 - [SendinBlueApi.CreateSender](docs/CreateSender.md)
 - [SendinBlueApi.CreateSenderIps](docs/CreateSenderIps.md)
 - [SendinBlueApi.CreateSenderModel](docs/CreateSenderModel.md)
 - [SendinBlueApi.CreateSmsCampaign](docs/CreateSmsCampaign.md)
 - [SendinBlueApi.CreateSmsCampaignRecipients](docs/CreateSmsCampaignRecipients.md)
 - [SendinBlueApi.CreateSmtpEmail](docs/CreateSmtpEmail.md)
 - [SendinBlueApi.CreateSmtpTemplate](docs/CreateSmtpTemplate.md)
 - [SendinBlueApi.CreateSmtpTemplateSender](docs/CreateSmtpTemplateSender.md)
 - [SendinBlueApi.CreateUpdateContactModel](docs/CreateUpdateContactModel.md)
 - [SendinBlueApi.CreateUpdateFolder](docs/CreateUpdateFolder.md)
 - [SendinBlueApi.CreateWebhook](docs/CreateWebhook.md)
 - [SendinBlueApi.CreatedProcessId](docs/CreatedProcessId.md)
 - [SendinBlueApi.DeleteHardbounces](docs/DeleteHardbounces.md)
 - [SendinBlueApi.EmailExportRecipients](docs/EmailExportRecipients.md)
 - [SendinBlueApi.ErrorModel](docs/ErrorModel.md)
 - [SendinBlueApi.GetAccountMarketingAutomation](docs/GetAccountMarketingAutomation.md)
 - [SendinBlueApi.GetAccountPlan](docs/GetAccountPlan.md)
 - [SendinBlueApi.GetAccountRelay](docs/GetAccountRelay.md)
 - [SendinBlueApi.GetAccountRelayData](docs/GetAccountRelayData.md)
 - [SendinBlueApi.GetAggregatedReport](docs/GetAggregatedReport.md)
 - [SendinBlueApi.GetAttributes](docs/GetAttributes.md)
 - [SendinBlueApi.GetAttributesAttributes](docs/GetAttributesAttributes.md)
 - [SendinBlueApi.GetAttributesEnumeration](docs/GetAttributesEnumeration.md)
 - [SendinBlueApi.GetCampaignOverview](docs/GetCampaignOverview.md)
 - [SendinBlueApi.GetCampaignRecipients](docs/GetCampaignRecipients.md)
 - [SendinBlueApi.GetCampaignStats](docs/GetCampaignStats.md)
 - [SendinBlueApi.GetChildDomain](docs/GetChildDomain.md)
 - [SendinBlueApi.GetChildDomains](docs/GetChildDomains.md)
 - [SendinBlueApi.GetChildInfoApiKeys](docs/GetChildInfoApiKeys.md)
 - [SendinBlueApi.GetChildInfoApiKeysV2](docs/GetChildInfoApiKeysV2.md)
 - [SendinBlueApi.GetChildInfoApiKeysV3](docs/GetChildInfoApiKeysV3.md)
 - [SendinBlueApi.GetChildInfoCredits](docs/GetChildInfoCredits.md)
 - [SendinBlueApi.GetChildInfoStatistics](docs/GetChildInfoStatistics.md)
 - [SendinBlueApi.GetChildrenList](docs/GetChildrenList.md)
 - [SendinBlueApi.GetClient](docs/GetClient.md)
 - [SendinBlueApi.GetContactCampaignStats](docs/GetContactCampaignStats.md)
 - [SendinBlueApi.GetContactCampaignStatsClicked](docs/GetContactCampaignStatsClicked.md)
 - [SendinBlueApi.GetContactCampaignStatsOpened](docs/GetContactCampaignStatsOpened.md)
 - [SendinBlueApi.GetContactCampaignStatsTransacAttributes](docs/GetContactCampaignStatsTransacAttributes.md)
 - [SendinBlueApi.GetContactCampaignStatsUnsubscriptions](docs/GetContactCampaignStatsUnsubscriptions.md)
 - [SendinBlueApi.GetContactDetails](docs/GetContactDetails.md)
 - [SendinBlueApi.GetContacts](docs/GetContacts.md)
 - [SendinBlueApi.GetEmailCampaigns](docs/GetEmailCampaigns.md)
 - [SendinBlueApi.GetEmailEventReport](docs/GetEmailEventReport.md)
 - [SendinBlueApi.GetEmailEventReportEvents](docs/GetEmailEventReportEvents.md)
 - [SendinBlueApi.GetExtendedCampaignOverviewSender](docs/GetExtendedCampaignOverviewSender.md)
 - [SendinBlueApi.GetExtendedCampaignStats](docs/GetExtendedCampaignStats.md)
 - [SendinBlueApi.GetExtendedClientAddress](docs/GetExtendedClientAddress.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatistics](docs/GetExtendedContactDetailsStatistics.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatisticsClicked](docs/GetExtendedContactDetailsStatisticsClicked.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatisticsLinks](docs/GetExtendedContactDetailsStatisticsLinks.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatisticsMessagesSent](docs/GetExtendedContactDetailsStatisticsMessagesSent.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatisticsOpened](docs/GetExtendedContactDetailsStatisticsOpened.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatisticsUnsubscriptions](docs/GetExtendedContactDetailsStatisticsUnsubscriptions.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription](docs/GetExtendedContactDetailsStatisticsUnsubscriptionsAdminUnsubscription.md)
 - [SendinBlueApi.GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription](docs/GetExtendedContactDetailsStatisticsUnsubscriptionsUserUnsubscription.md)
 - [SendinBlueApi.GetExtendedListCampaignStats](docs/GetExtendedListCampaignStats.md)
 - [SendinBlueApi.GetFolder](docs/GetFolder.md)
 - [SendinBlueApi.GetFolderLists](docs/GetFolderLists.md)
 - [SendinBlueApi.GetFolders](docs/GetFolders.md)
 - [SendinBlueApi.GetIp](docs/GetIp.md)
 - [SendinBlueApi.GetIpFromSender](docs/GetIpFromSender.md)
 - [SendinBlueApi.GetIps](docs/GetIps.md)
 - [SendinBlueApi.GetIpsFromSender](docs/GetIpsFromSender.md)
 - [SendinBlueApi.GetList](docs/GetList.md)
 - [SendinBlueApi.GetLists](docs/GetLists.md)
 - [SendinBlueApi.GetProcess](docs/GetProcess.md)
 - [SendinBlueApi.GetProcesses](docs/GetProcesses.md)
 - [SendinBlueApi.GetReports](docs/GetReports.md)
 - [SendinBlueApi.GetReportsReports](docs/GetReportsReports.md)
 - [SendinBlueApi.GetSendersList](docs/GetSendersList.md)
 - [SendinBlueApi.GetSendersListIps](docs/GetSendersListIps.md)
 - [SendinBlueApi.GetSendersListSenders](docs/GetSendersListSenders.md)
 - [SendinBlueApi.GetSmsCampaignOverview](docs/GetSmsCampaignOverview.md)
 - [SendinBlueApi.GetSmsCampaignStats](docs/GetSmsCampaignStats.md)
 - [SendinBlueApi.GetSmsCampaigns](docs/GetSmsCampaigns.md)
 - [SendinBlueApi.GetSmsEventReport](docs/GetSmsEventReport.md)
 - [SendinBlueApi.GetSmsEventReportEvents](docs/GetSmsEventReportEvents.md)
 - [SendinBlueApi.GetSmtpTemplateOverview](docs/GetSmtpTemplateOverview.md)
 - [SendinBlueApi.GetSmtpTemplateOverviewSender](docs/GetSmtpTemplateOverviewSender.md)
 - [SendinBlueApi.GetSmtpTemplates](docs/GetSmtpTemplates.md)
 - [SendinBlueApi.GetSsoToken](docs/GetSsoToken.md)
 - [SendinBlueApi.GetStatsByDomain](docs/GetStatsByDomain.md)
 - [SendinBlueApi.GetTransacAggregatedSmsReport](docs/GetTransacAggregatedSmsReport.md)
 - [SendinBlueApi.GetTransacEmailContent](docs/GetTransacEmailContent.md)
 - [SendinBlueApi.GetTransacEmailContentEvents](docs/GetTransacEmailContentEvents.md)
 - [SendinBlueApi.GetTransacEmailsList](docs/GetTransacEmailsList.md)
 - [SendinBlueApi.GetTransacEmailsListTransactionalEmails](docs/GetTransacEmailsListTransactionalEmails.md)
 - [SendinBlueApi.GetTransacSmsReport](docs/GetTransacSmsReport.md)
 - [SendinBlueApi.GetTransacSmsReportReports](docs/GetTransacSmsReportReports.md)
 - [SendinBlueApi.GetWebhook](docs/GetWebhook.md)
 - [SendinBlueApi.GetWebhooks](docs/GetWebhooks.md)
 - [SendinBlueApi.ManageIp](docs/ManageIp.md)
 - [SendinBlueApi.PostContactInfo](docs/PostContactInfo.md)
 - [SendinBlueApi.PostContactInfoContacts](docs/PostContactInfoContacts.md)
 - [SendinBlueApi.PostSendFailed](docs/PostSendFailed.md)
 - [SendinBlueApi.PostSendSmsTestFailed](docs/PostSendSmsTestFailed.md)
 - [SendinBlueApi.RemainingCreditModel](docs/RemainingCreditModel.md)
 - [SendinBlueApi.RemainingCreditModelChild](docs/RemainingCreditModelChild.md)
 - [SendinBlueApi.RemainingCreditModelReseller](docs/RemainingCreditModelReseller.md)
 - [SendinBlueApi.RemoveContactFromList](docs/RemoveContactFromList.md)
 - [SendinBlueApi.RemoveCredits](docs/RemoveCredits.md)
 - [SendinBlueApi.RequestContactExport](docs/RequestContactExport.md)
 - [SendinBlueApi.RequestContactImport](docs/RequestContactImport.md)
 - [SendinBlueApi.RequestContactImportNewList](docs/RequestContactImportNewList.md)
 - [SendinBlueApi.RequestSmsRecipientExport](docs/RequestSmsRecipientExport.md)
 - [SendinBlueApi.SendEmail](docs/SendEmail.md)
 - [SendinBlueApi.SendEmailAttachment](docs/SendEmailAttachment.md)
 - [SendinBlueApi.SendReport](docs/SendReport.md)
 - [SendinBlueApi.SendReportEmail](docs/SendReportEmail.md)
 - [SendinBlueApi.SendSms](docs/SendSms.md)
 - [SendinBlueApi.SendSmtpEmail](docs/SendSmtpEmail.md)
 - [SendinBlueApi.SendSmtpEmailAttachment](docs/SendSmtpEmailAttachment.md)
 - [SendinBlueApi.SendSmtpEmailBcc](docs/SendSmtpEmailBcc.md)
 - [SendinBlueApi.SendSmtpEmailCc](docs/SendSmtpEmailCc.md)
 - [SendinBlueApi.SendSmtpEmailReplyTo](docs/SendSmtpEmailReplyTo.md)
 - [SendinBlueApi.SendSmtpEmailSender](docs/SendSmtpEmailSender.md)
 - [SendinBlueApi.SendSmtpEmailTo](docs/SendSmtpEmailTo.md)
 - [SendinBlueApi.SendTemplateEmail](docs/SendTemplateEmail.md)
 - [SendinBlueApi.SendTestEmail](docs/SendTestEmail.md)
 - [SendinBlueApi.SendTestSms](docs/SendTestSms.md)
 - [SendinBlueApi.SendTransacSms](docs/SendTransacSms.md)
 - [SendinBlueApi.UpdateAttribute](docs/UpdateAttribute.md)
 - [SendinBlueApi.UpdateAttributeEnumeration](docs/UpdateAttributeEnumeration.md)
 - [SendinBlueApi.UpdateCampaignStatus](docs/UpdateCampaignStatus.md)
 - [SendinBlueApi.UpdateChild](docs/UpdateChild.md)
 - [SendinBlueApi.UpdateChildAccountStatus](docs/UpdateChildAccountStatus.md)
 - [SendinBlueApi.UpdateChildDomain](docs/UpdateChildDomain.md)
 - [SendinBlueApi.UpdateContact](docs/UpdateContact.md)
 - [SendinBlueApi.UpdateEmailCampaign](docs/UpdateEmailCampaign.md)
 - [SendinBlueApi.UpdateEmailCampaignRecipients](docs/UpdateEmailCampaignRecipients.md)
 - [SendinBlueApi.UpdateEmailCampaignSender](docs/UpdateEmailCampaignSender.md)
 - [SendinBlueApi.UpdateList](docs/UpdateList.md)
 - [SendinBlueApi.UpdateSender](docs/UpdateSender.md)
 - [SendinBlueApi.UpdateSmsCampaign](docs/UpdateSmsCampaign.md)
 - [SendinBlueApi.UpdateSmtpTemplate](docs/UpdateSmtpTemplate.md)
 - [SendinBlueApi.UpdateSmtpTemplateSender](docs/UpdateSmtpTemplateSender.md)
 - [SendinBlueApi.UpdateWebhook](docs/UpdateWebhook.md)
 - [SendinBlueApi.GetChildInfo](docs/GetChildInfo.md)
 - [SendinBlueApi.GetExtendedCampaignOverview](docs/GetExtendedCampaignOverview.md)
 - [SendinBlueApi.GetExtendedClient](docs/GetExtendedClient.md)
 - [SendinBlueApi.GetExtendedContactDetails](docs/GetExtendedContactDetails.md)
 - [SendinBlueApi.GetExtendedList](docs/GetExtendedList.md)
 - [SendinBlueApi.GetSmsCampaign](docs/GetSmsCampaign.md)
 - [SendinBlueApi.GetAccount](docs/GetAccount.md)
 - [SendinBlueApi.GetEmailCampaign](docs/GetEmailCampaign.md)


## Documentation for Authorization


### api-key

- **Type**: API key
- **API key parameter name**: api-key
- **Location**: HTTP header

