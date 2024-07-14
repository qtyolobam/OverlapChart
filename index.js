const MONTHS = {
    "1": 31, "2": 28, "3": 31, "4": 30, "5": 31, "6": 30,
    "7": 31, "8": 31, "9": 30, "10": 31, "11": 30, "12": 31
};
let min = new Date(10000, 12, 31);
let max = new Date(0, 0, 0);
const sampleData = [
    {
      "Brand": "DMS",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 10/30/23 - 4/22/24",
      "Priority": "Critical",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "10/30/2023",
      "Duration": 175,
      "End Date": "4/22/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "Manheim",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 10/30/23 - 4/22/24",
      "Priority": "Critical",
      "SGS?": "No",
      "Level of Effort": "Medium",
      "Start Date": "10/30/2023",
      "Duration": 175,
      "End Date": "4/22/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "DealShield",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 10/30/23 - 4/22/24",
      "Priority": "Critical",
      "SGS?": "Yes",
      "Level of Effort": "Low",
      "Start Date": "10/30/2023",
      "Duration": 175,
      "End Date": "4/22/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "Auto QA Pilot Team",
      "Bar Wording": "Auto QA Pilot Team, 2/1/24 - 6/1/24",
      "Priority": "Critical",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "2/1/2024",
      "Duration": 121,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "Vinsolutions",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 3/19/24 - 6/3/24",
      "Priority": "Critical",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "3/19/2024",
      "Duration": 76,
      "End Date": "6/3/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 3/19/24 - 6/3/24",
      "Priority": "Critical",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "3/19/2024",
      "Duration": 76,
      "End Date": "6/3/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "Express Aftermarket",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 3/19/24 - 5/20/24",
      "Priority": "Critical",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "3/19/2024",
      "Duration": 62,
      "End Date": "5/20/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "RTS",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 3/19/24 - 5/20/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "3/19/2024",
      "Duration": 62,
      "End Date": "5/20/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "VinSolutions",
      "Initiative (task)": "Auto QA Wave 1",
      "Bar Wording": "Auto QA Wave 1, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "Auto QA Wave 1",
      "Bar Wording": "Auto QA Wave 1, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Multi Channel Email (Care) Pilot",
      "Bar Wording": "Multi Channel Email (Care) Pilot, 4/1/24 - 6/24/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 84,
      "End Date": "6/24/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 4/1/24 - 6/28/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 88,
      "End Date": "6/28/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "F&I Dealer",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Manheim",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DealShield",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Private Store",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Ready Logistics",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 7/1/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 91,
      "End Date": "7/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "RTS",
      "Initiative (task)": "Auto QA",
      "Bar Wording": "Auto QA, 4/1/24 - 6/1/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "4/1/2024",
      "Duration": 61,
      "End Date": "6/1/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "vAuto",
      "Initiative (task)": "Gen AI Beta Team",
      "Bar Wording": "Gen AI Beta Team, 4/10/24 - 5/31/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "4/10/2024",
      "Duration": 51,
      "End Date": "5/31/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "VinSolutions",
      "Initiative (task)": "Career Progression Phase 1",
      "Bar Wording": "Career Progression Phase 1, 5/1/24 - 5/15/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/1/2024",
      "Duration": 14,
      "End Date": "5/15/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "ICO",
      "Initiative (task)": "Gen AI",
      "Bar Wording": "Gen AI, 5/1/24 - 5/24/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/1/2024",
      "Duration": 23,
      "End Date": "5/24/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "Career Progression Phase 1",
      "Bar Wording": "Career Progression Phase 1, 5/1/24 - 5/15/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/1/2024",
      "Duration": 14,
      "End Date": "5/15/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Career Progression Phase 1",
      "Bar Wording": "Career Progression Phase 1, 5/1/24 - 5/15/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/1/2024",
      "Duration": 14,
      "End Date": "5/15/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "Career Progression Phase 1",
      "Bar Wording": "Career Progression Phase 1, 5/1/24 - 5/15/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/1/2024",
      "Duration": 14,
      "End Date": "5/15/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "VinSolutions",
      "Initiative (task)": "Gen AI",
      "Bar Wording": "Gen AI, 5/2/24 - 6/3/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/2/2024",
      "Duration": 32,
      "End Date": "6/3/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "Gen AI Pilot Team",
      "Bar Wording": "Gen AI Pilot Team, 5/2/24 - 5/17/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/2/2024",
      "Duration": 15,
      "End Date": "5/17/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "HomeNet",
      "Initiative (task)": "Gen AI (Care) Pilot Team",
      "Bar Wording": "Gen AI (Care) Pilot Team, 5/2/24 - 5/17/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/2/2024",
      "Duration": 15,
      "End Date": "5/17/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "Gen AI_ATT/KBB Team",
      "Bar Wording": "Gen AI_ATT/KBB Team, 5/13/24 - 5/20/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/13/2024",
      "Duration": 7,
      "End Date": "5/20/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "HomeNet",
      "Initiative (task)": "Gen AI_HomeNet Team",
      "Bar Wording": "Gen AI_HomeNet Team, 5/13/24 - 5/20/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/13/2024",
      "Duration": 7,
      "End Date": "5/20/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "Gen AI (Care) Pilot Team",
      "Bar Wording": "Gen AI (Care) Pilot Team, 5/13/24 - 6/3/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/13/2024",
      "Duration": 21,
      "End Date": "6/3/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "F&I Dealer",
      "Initiative (task)": "Gen AI (Care) Pilot Team",
      "Bar Wording": "Gen AI (Care) Pilot Team, 5/13/24 - 6/3/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/13/2024",
      "Duration": 21,
      "End Date": "6/3/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 5/27/24 - 7/29/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/27/2024",
      "Duration": 63,
      "End Date": "7/29/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 5/27/24 - 7/29/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/27/2024",
      "Duration": 63,
      "End Date": "7/29/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "Gen AI (Care)_DMS Team",
      "Bar Wording": "Gen AI (Care)_DMS Team, 5/28/24 - 6/10/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/28/2024",
      "Duration": 13,
      "End Date": "6/10/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "F&I Dealer",
      "Initiative (task)": "Gen AI (Care)_F&I Team",
      "Bar Wording": "Gen AI (Care)_F&I Team, 5/28/24 - 6/10/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/28/2024",
      "Duration": 13,
      "End Date": "6/10/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "vAuto",
      "Initiative (task)": "Gen AI vAuto Team",
      "Bar Wording": "Gen AI vAuto Team, 5/29/24 - 6/3/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "5/29/2024",
      "Duration": 5,
      "End Date": "6/3/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "ICONIC Beta Implementation Team",
      "Bar Wording": "ICONIC Beta Implementation Team, 5/31/24 - 6/28/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "5/31/2024",
      "Duration": 28,
      "End Date": "6/28/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "HomeNet",
      "Initiative (task)": "Career Progression Phase 2",
      "Bar Wording": "Career Progression Phase 2, 6/1/24 - 6/15/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "6/1/2024",
      "Duration": 14,
      "End Date": "6/15/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "F&I Dealer",
      "Initiative (task)": "Career Progression Phase 2",
      "Bar Wording": "Career Progression Phase 2, 6/1/24 - 6/15/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "6/1/2024",
      "Duration": 14,
      "End Date": "6/15/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "F&I Lender",
      "Initiative (task)": "Career Progression Phase 2",
      "Bar Wording": "Career Progression Phase 2, 6/1/24 - 6/15/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "6/1/2024",
      "Duration": 14,
      "End Date": "6/15/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "Gen AI (Care) Pilot Team",
      "Bar Wording": "Gen AI (Care) Pilot Team, 6/3/24 - 6/21/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "6/3/2024",
      "Duration": 18,
      "End Date": "6/21/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Gen AI (Care) Pilot Team",
      "Bar Wording": "Gen AI (Care) Pilot Team, 6/3/24 - 6/21/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "6/3/2024",
      "Duration": 18,
      "End Date": "6/21/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "Gen AI (Care)_Xtime Team",
      "Bar Wording": "Gen AI (Care)_Xtime Team, 6/17/24 - 6/24/24",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "6/17/2024",
      "Duration": 7,
      "End Date": "6/24/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Gen AI (Care)_DDC Team",
      "Bar Wording": "Gen AI (Care)_DDC Team, 6/17/24 - 6/24/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "6/17/2024",
      "Duration": 7,
      "End Date": "6/24/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "VinSolutions",
      "Initiative (task)": "Multi Channel Email (Care)",
      "Bar Wording": "Multi Channel Email (Care), 6/25/24 - 7/22/24",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "6/25/2024",
      "Duration": 27,
      "End Date": "7/22/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "Multi Channel Email (Care)",
      "Bar Wording": "Multi Channel Email (Care), 6/25/24 - 7/22/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "6/25/2024",
      "Duration": 27,
      "End Date": "7/22/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "Multi Channel Email (Care)",
      "Bar Wording": "Multi Channel Email (Care), 6/25/24 - 7/22/24",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "6/25/2024",
      "Duration": 27,
      "End Date": "7/22/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "F&I Lender",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 7/1/24 - 9/23/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "7/1/2024",
      "Duration": 84,
      "End Date": "9/23/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "HomeNet",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 7/15/24 - 9/16/24",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "7/15/2024",
      "Duration": 63,
      "End Date": "9/16/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "vAuto",
      "Initiative (task)": "Multi Channel Email (Care)",
      "Bar Wording": "Multi Channel Email (Care), 7/22/24 - 8/23/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "7/22/2024",
      "Duration": 32,
      "End Date": "8/23/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "Multi Channel Email (Care)",
      "Bar Wording": "Multi Channel Email (Care), 7/22/24 - 8/22/24",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "7/22/2024",
      "Duration": 31,
      "End Date": "8/22/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "HomeNet",
      "Initiative (task)": "Multi Channel Email (Care)",
      "Bar Wording": "Multi Channel Email (Care), 7/22/24 - 8/22/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "7/22/2024",
      "Duration": 31,
      "End Date": "8/22/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "Express Aftermarket",
      "Initiative (task)": "Multi-Channel Email (Care)",
      "Bar Wording": "Multi-Channel Email (Care), 7/22/24 - 8/23/24",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "7/22/2024",
      "Duration": 32,
      "End Date": "8/23/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 8/1/24 - 8/30/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/1/2024",
      "Duration": 29,
      "End Date": "8/30/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "RTS",
      "Initiative (task)": "Career Progression Phase 3",
      "Bar Wording": "Career Progression Phase 3, 8/15/24 - 9/1/24",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/15/2024",
      "Duration": 17,
      "End Date": "9/1/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "CMS",
      "Initiative (task)": "Career Progression Phase 3",
      "Bar Wording": "Career Progression Phase 3, 8/15/24 - 9/1/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/15/2024",
      "Duration": 17,
      "End Date": "9/1/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "F&I Dealer",
      "Initiative (task)": "Multi-Channel Email (Care)",
      "Bar Wording": "Multi-Channel Email (Care), 8/26/24 - 9/19/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/26/2024",
      "Duration": 24,
      "End Date": "9/19/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDS",
      "Initiative (task)": "Multi-Channel Email (Care)",
      "Bar Wording": "Multi-Channel Email (Care), 8/26/24 - 9/19/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/26/2024",
      "Duration": 24,
      "End Date": "9/19/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "F&I Lender",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "vAuto",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "VinSolutions",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "HomeNet",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDC",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "F&I Dealer",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Manheim",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDS",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DealShield",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "Private Store",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "RTS",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "CMS",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "Accelerated Title",
      "Initiative (task)": "ICONIC",
      "Bar Wording": "ICONIC, 8/30/24 - 10/14/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "8/30/2024",
      "Duration": 45,
      "End Date": "10/14/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "Xtime",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 9/2/24 - 10/4/24",
      "Priority": "Medium",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "9/2/2024",
      "Duration": 32,
      "End Date": "10/4/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 9/2/24 - 10/4/24",
      "Priority": "Medium",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "9/2/2024",
      "Duration": 32,
      "End Date": "10/4/2024",
      "Origin": "",
      "Bar Color": "Yellow"
    },
    {
      "Brand": "DDS",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 9/2/24 - 9/27/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "9/2/2024",
      "Duration": 25,
      "End Date": "9/27/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 10/1/24 - 12/16/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "10/1/2024",
      "Duration": 76,
      "End Date": "12/16/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Manheim",
      "Initiative (task)": "Multi-Channel Email (Care)",
      "Bar Wording": "Multi-Channel Email (Care), 10/1/24 - 10/31/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "10/1/2024",
      "Duration": 30,
      "End Date": "10/31/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DealShield",
      "Initiative (task)": "Multi-Channel Email (Care)",
      "Bar Wording": "Multi-Channel Email (Care), 10/1/24 - 10/31/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "10/1/2024",
      "Duration": 30,
      "End Date": "10/31/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Ready Logistics",
      "Initiative (task)": "Multi-Channel Email (Care)",
      "Bar Wording": "Multi-Channel Email (Care), 10/1/24 - 10/31/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "10/1/2024",
      "Duration": 30,
      "End Date": "10/31/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "VinSolutions",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 10/7/24 - 11/8/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "10/7/2024",
      "Duration": 32,
      "End Date": "11/8/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "AT/KBB",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 10/7/24 - 11/8/24",
      "Priority": "Critical",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "10/7/2024",
      "Duration": 32,
      "End Date": "11/8/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "HomeNet",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 10/7/24 - 11/8/24",
      "Priority": "Critical",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "10/7/2024",
      "Duration": 32,
      "End Date": "11/8/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "Express Aftermarket",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 10/7/24 - 11/8/24",
      "Priority": "Critical",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "10/7/2024",
      "Duration": 32,
      "End Date": "11/8/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "CMS",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 10/7/24 - 12/9/24",
      "Priority": "Critical",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "10/7/2024",
      "Duration": 63,
      "End Date": "12/9/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "Accelerated Title",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 10/7/24 - 12/9/24",
      "Priority": "Critical",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "10/7/2024",
      "Duration": 63,
      "End Date": "12/9/2024",
      "Origin": "",
      "Bar Color": "Red"
    },
    {
      "Brand": "Private Store",
      "Initiative (task)": "Screen Share",
      "Bar Wording": "Screen Share, 10/30/23 - 4/22/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "10/30/2023",
      "Duration": 175,
      "End Date": "4/22/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "Ecommerce",
      "Initiative (task)": "Multi Channel Email (Care)",
      "Bar Wording": "Multi Channel Email (Care), 11/1/24 - 11/30/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "11/1/2024",
      "Duration": 29,
      "End Date": "11/30/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "F&I Dealer",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 11/11/24 - 12/13/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "11/11/2024",
      "Duration": 32,
      "End Date": "12/13/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "F&I Lender",
      "Initiative (task)": "Multi-Channel Email (Care)",
      "Bar Wording": "Multi-Channel Email (Care), 11/11/24 - 11/30/24",
      "Priority": "High",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "11/11/2024",
      "Duration": 19,
      "End Date": "11/30/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "DDS",
      "Initiative (task)": "Multi Channel SMS (Care)",
      "Bar Wording": "Multi Channel SMS (Care), 11/11/24 - 12/13/24",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "11/11/2024",
      "Duration": 32,
      "End Date": "12/13/2024",
      "Origin": "",
      "Bar Color": "Orange"
    },
    {
      "Brand": "ICO",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 12/1/24 - 12/27/24",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "12/1/2024",
      "Duration": 26,
      "End Date": "12/27/2024",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "DMS",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 1/3/25 - 3/24/25",
      "Priority": "Low",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "1/3/2025",
      "Duration": 80,
      "End Date": "3/24/2025",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "Ecommerce",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 4/1/25 - 6/23/25",
      "Priority": "Low",
      "SGS?": "No",
      "Level of Effort": "High",
      "Start Date": "4/1/2025",
      "Duration": 83,
      "End Date": "6/23/2025",
      "Origin": "",
      "Bar Color": "Green"
    },
    {
      "Brand": "Express Aftermarket",
      "Initiative (task)": "Knowledge and Communities (Care)",
      "Bar Wording": "Knowledge and Communities (Care), 7/1/25 - 9/22/25",
      "Priority": "High",
      "SGS?": "Yes",
      "Level of Effort": "High",
      "Start Date": "7/1/2025",
      "Duration": 83,
      "End Date": "9/22/2025",
      "Origin": "",
      "Bar Color": "Orange"
    }
   ];

   let currentEditIndex = -1;

   function iterateOverData(sampleData) {
       for (let i = 0; i < sampleData.length; i++) {
           let startDate = sampleData[i]["Start Date"].split("/");
           let endDate = sampleData[i]["End Date"].split("/");
   
           let startMonth = parseInt(startDate[0]);
           let startDay = parseInt(startDate[1]);
           let startYear = parseInt(startDate[2]);
   
           let endMonth = parseInt(endDate[0]);
           let endDay = parseInt(endDate[1]);
           let endYear = parseInt(endDate[2]);
   
           if (startDay > MONTHS[startMonth] || endDay > MONTHS[endMonth]) {
               console.log("Invalid date: day exceeds the number of days in the month.");
               continue;
           }
   
           let start = new Date(startYear, startMonth - 1, startDay + 1);
           let end = new Date(endYear, endMonth - 1, endDay + 1);
   
           if (start < min) {
               min = start;
           }
           if (end > max) {
               max = end;
           }
       }
   }
   
   iterateOverData(sampleData);
   
   function createDateDivs() {
       let datesRow = document.getElementsByClassName("dates-row")[0];
       datesRow.innerHTML = "";
       let yearRange = max.getFullYear() - min.getFullYear();
       for (let i = 0; i < yearRange + 1; i++) {
           for (let j = 0; j < Object.keys(MONTHS).length; j++) {
               if (i != 0 || (i == 0 && j >= min.getMonth())) {
                   let dateDiv = document.createElement("div");
                   dateDiv.innerHTML = `01-${j + 1}-${min.getFullYear() + i}`;
                   dateDiv.classList.add('date');
                   dateDiv.style.width = `${MONTHS[j + 1] * 7}px`;
                   datesRow.appendChild(dateDiv);
               }
           }
       }
   }
   
   function createDataDivs() {

       const rightTable = document.getElementById("right-table");
       const leftTable = document.getElementById("left-table");
   
       rightTable.innerHTML = rightTable.rows[0].outerHTML;
       leftTable.innerHTML = '';
   
       for (let i = 0; i < sampleData.length; i++) {
           let startDate = sampleData[i]["Start Date"].split("/");
           let endDate = sampleData[i]["End Date"].split("/");
   
           let startMonth = parseInt(startDate[0]) - 1;
           let startDay = parseInt(startDate[1]);
           let startYear = parseInt(startDate[2]);
   
           let endMonth = parseInt(endDate[0]) - 1;
           let endDay = parseInt(endDate[1]);
           let endYear = parseInt(endDate[2]);
           let start_date = new Date(startYear, startMonth, startDay + 1);
           let end_date = new Date(endYear, endMonth, endDay + 1);
           const final_date = end_date.getTime() - start_date.getTime();
           const len_div = (final_date / 86400000) * 7 - 2;
   
           const min_start = new Date(min.getFullYear(), min.getMonth(), 1);
           const div_padding = ((start_date.getTime() - min_start.getTime()) / 86400000) * 7;
   
           const row = `<tr>
                           <td class='right-table-rows'>
                             <div class='bar' style= "width:${len_div}px;margin-left:${div_padding}px;background-color:${sampleData[i]['Bar Color']};">
                               <div id='inner_div'>${sampleData[i][`Bar Wording`]}</div>
                             </div>
                           </td>
                        </tr>`;
           const row1 = `
                 <tr>
                   <th class="left-table-header">
                       <div style="display: flex; justify-content: space-between; align-items: center;padding-left:1vw;padding-right:1vw">
                           <div id="inner_div">${sampleData[i]["Bar Wording"]}</div>
                           <div style="display: flex; gap:1vw">
                               <button class="edit-btn" data-index="${i}">Edit</button>
                               <button class="delete-btn" data-index="${i}">Delete</button>
                           </div>
                       </div>
                   </th>
               </tr>`;
   
           rightTable.insertAdjacentHTML('beforeend', row);
           leftTable.insertAdjacentHTML('beforeend', row1);
       }
   
       document.querySelectorAll('.edit-btn').forEach(button => {
           button.addEventListener('click', handleEdit);
       });
   
       document.querySelectorAll('.delete-btn').forEach(button => {
           button.addEventListener('click', handleDelete);
       });
   }
   createDateDivs();
   createDataDivs();
   
   function handleEdit(event) {
       currentEditIndex = event.target.dataset.index;
       const data = sampleData[currentEditIndex];
       
       const editForm = document.getElementById('edit-form');
       editForm.brand.value = data.Brand;
       editForm['bar-wording'].value = data["Bar Wording"];
       editForm.priority.value = data.Priority;
       editForm['start-date'].value = formatDateForInput(data["Start Date"]);
       editForm['end-date'].value = formatDateForInput(data["End Date"]);
   
       document.getElementById('edit-dialog').showModal();
   }
   
   function handleDelete(event) {
       const indexToDelete = event.target.dataset.index;
       sampleData.splice(indexToDelete, 1); 
   
       createDateDivs(); 
       createDataDivs(); 
   }
   
   function formatDateForInput(date) {
       let [month, day, year] = date.split("/");
       return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
   }
   
   function formatDateForOutput(date) {
       let [year, month, day] = date.split("-");
       return `${month}/${day}/${year}`;
   }
   
   document.getElementById('edit-form').addEventListener('submit', function(event) {
       event.preventDefault();
   
       sampleData[currentEditIndex].Brand = event.target.brand.value;
       sampleData[currentEditIndex].Priority = event.target.priority.value;
       sampleData[currentEditIndex]["Start Date"] = formatDateForOutput(event.target['start-date'].value);
       sampleData[currentEditIndex]["End Date"] = formatDateForOutput(event.target['end-date'].value);
       sampleData[currentEditIndex]["Bar Wording"] = `${event.target['bar-wording'].value.split(',')[0]}, ${formatDateForOutput(event.target['start-date'].value)} - ${formatDateForOutput(event.target['end-date'].value)}`;
   
       createDataDivs();
       document.getElementById('edit-dialog').close();
   });
   
   document.getElementById('cancel-edit').addEventListener('click', function() {
       document.getElementById('edit-dialog').close();
   });
   
   // Handle Add Functionality
   document.getElementById('add-btn').addEventListener('click', function() {
       document.getElementById('add-dialog').showModal();
   });
   
document.getElementById('add-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const newEntry = {
        "Brand": event.target['brand'].value,
        "Initiative (task)": event.target['initiative'].value,
        "Bar Wording": `${event.target['bar-wording'].value}, ${formatDateForOutput(event.target['start-date'].value)} - ${formatDateForOutput(event.target['end-date'].value)}`,
        "Priority": event.target['priority'].value,
        "SGS?": event.target['sgs'].value,
        "Level of Effort": event.target['effort'].value,
        "Start Date": formatDateForOutput(event.target['start-date'].value),
        "Duration": Math.ceil((new Date(event.target['end-date'].value) - new Date(event.target['start-date'].value)) / 86400000),
        "End Date": formatDateForOutput(event.target['end-date'].value),
        "Origin": event.target['origin'].value,
        "Bar Color": event.target['bar-color'].value
    };

    sampleData.push(newEntry);
    iterateOverData(sampleData);
    createDateDivs();
    createDataDivs();
    document.getElementById('add-dialog').close();
});

document.getElementById('cancel-add').addEventListener('click', function() {
    document.getElementById('add-dialog').close();
});