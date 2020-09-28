# This a poll tool for everyone incl. DB storage


## Features
### MVP
- [ ] User should be able to create new polls with unlimted options
- [ ] create new TinyUrl for persistent Polls
- [ ] Polls should be saved in a DB


### Optional Features
- [ ] Authorization to create new polls (to lock it down) - Auht0/Google/FB/...
- [ ] Timeframe for voting. After time is over, poll will be locked
- [ ] Option to make private and public polls


## Backend API Description
#### POST new Poll
___Database Fields:___
- ID (int)
- poll_code (String)
- question (String)
- answers (String Array)

___Sample Request:___
```json
{
    "question": "Which cloud provider do you prefer?",
    "answers": [
        {
            "0": "Azure"
        },
        {
            "1": "Google"
        },
        {
            "2": "Amazon"
        },
        {
            "3": "Others"
        }
    ]
}
```