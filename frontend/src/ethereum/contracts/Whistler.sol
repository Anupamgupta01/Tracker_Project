pragma solidity ^0.4.21;

contract whistler{
    
   struct Report {
        string chemical_name;
        uint quantity;
        string date;
        string ngo_name;
        bool treated;
        string remarks;
        string inspector;
    }
    
    struct Complaint {
        string description;
        string date;
        string hash;
        string phone;
    }
    
    mapping(uint => Report[]) public reports_map;
    mapping(uint => uint) public reports_count;
    
    mapping(uint => Complaint[]) public complaints_map;
    mapping(uint => uint) public complaint_count;
    
    function inspect(uint _id, string memory _chemical_name, uint _quantity, string memory _date, string memory _ngo_name, bool _treated, string _remarks, string _inspector) public {
        
         Report memory newReport = Report({
           chemical_name: _chemical_name,
           quantity: _quantity,
           date: _date,
           ngo_name: _ngo_name,
           treated: _treated,
           remarks: _remarks,
           inspector: _inspector
        });
        
        reports_map[_id].push(newReport);
        reports_count[_id]++;
    }
    
    function file_complain(uint _id, string memory _desc, string memory _date, string memory _hash, string memory _phone) public{
        
         Complaint memory newComplaint = Complaint({
           description: _desc,
           date: _date,
           hash: _hash,
           phone: _phone
        });
        
        complaints_map[_id].push(newComplaint);
        complaint_count[_id]++;
    }
    
}

