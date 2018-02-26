import { Component, OnInit , Input} from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.css']
})
export class SearchDetailsComponent implements OnInit {
	@Input() destinationTo:any;
	@Input() destinationFrom: any;



	  flag:boolean;
	  showVal:boolean;
	  fromFlight: any;
	  toFlight: any;
  	title: any;
	  flightData: any = [
  {
    "From": "Chennai",
    "To": "Delhi",
    "Departure": "5:00 PM",
    "Arrival": "7:40 PM",
    "Duration": "2 Hours 40 mins",
    "Airline": "Jet Airways",
    "Seats Available": 1,
    "Price": 6900
  },
  {
    "From": "Kolkata",
    "To": "Bangalore",
    "Departure": "9:40 PM",
    "Arrival": "12:10 AM",
    "Duration": "2 Hours 30 mins",
    "Airline": "Air India",
    "Seats Available": 1,
    "Price": 7500
  },
  {
    "From": "Bangalore",
    "To": "Kolkata",
    "Departure": "7:00 AM",
    "Arrival": "9:30 AM",
    "Duration": "2 Hours 30 mins",
    "Airline": "Jet Airways",
    "Seats Available": 2,
    "Price": 4000
  },
  {
    "From": "Delhi",
    "To": "Chennai",
    "Departure": "12:30 PM",
    "Arrival": "3:20 PM",
    "Duration": "2 Hours 50 Mins",
    "Airline": "Air India",
    "Seats Available": 3,
    "Price": 9000
  },
  {
    "From": "Bangalore",
    "To": "Kolkata",
    "Departure": "5:00 PM",
    "Arrival": "7:00 PM",
    "Duration": "2 Hours",
    "Airline": "Air India",
    "Seats Available": 3,
    "Price": 10000
  },
  {
    "From": "Kolkata",
    "To": "Bangalore",
    "Departure": "9:30 PM",
    "Arrival": "12:10 AM",
    "Duration": "2 Hours 40 mins",
    "Airline": "Jet Airways",
    "Seats Available": 3,
    "Price": 6300
  },
  {
    "From": "Bangalore",
    "To": "Kolkata",
    "Departure": "6:00 PM",
    "Arrival": "8:00 PM",
    "Duration": "2 Hours",
    "Airline": "Indigo",
    "Seats Available": 5,
    "Price": 6000
  },
  {
    "From": "Delhi",
    "To": "Chennai",
    "Departure": "3:00 AM",
    "Arrival": "6:00 AM",
    "Duration": "3 Hours",
    "Airline": "Air India",
    "Seats Available": 7,
    "Price": 8000
  },
  {
    "From": "Chennai",
    "To": "Delhi",
    "Departure": "2:00 AM",
    "Arrival": "5:00 AM",
    "Duration": "3 hours",
    "Airline": "Air India",
    "Seats Available": 10,
    "Price": 7000
  },
  {
    "From": "Kolkata",
    "To": "Bangalore",
    "Departure": "5:50 AM",
    "Arrival": "7:50 AM",
    "Duration": "2 Hours",
    "Airline": "Air India",
    "Seats Available": 12,
    "Price": 5699
  },
  {
    "From": "Delhi",
    "To": "Chennai",
    "Departure": "12:20 PM",
    "Arrival": "3:20 PM",
    "Duration": "3 Hours",
    "Airline": "Air India",
    "Seats Available": 12,
    "Price": 9000
  },
  {
    "From": "Bangalore",
    "To": "Kolkata",
    "Departure": "3:00 AM",
    "Arrival": "5:00 AM",
    "Duration": "2 Hours",
    "Airline": "Indigo",
    "Seats Available": 21,
    "Price": 6500
  },
  {
    "From": "Kolkata",
    "To": "Bangalore",
    "Departure": "5:50 AM",
    "Arrival": "8:00 AM",
    "Duration": "2 Hours 10 mins",
    "Airline": "Indigo",
    "Seats Available": 21,
    "Price": 5700
  },
  {
    "From": "Chennai",
    "To": "Delhi",
    "Departure": "4:50 PM",
    "Arrival": "7:00 PM",
    "Duration": "2 Hours 10 mins",
    "Airline": "Air India",
    "Seats Available": 24,
    "Price": 5750
  },
  {
    "From": "Delhi",
    "To": "Chennai",
    "Departure": "3:00 AM",
    "Arrival": "6:00 AM",
    "Duration": "3 Hours",
    "Airline": "Indigo",
    "Seats Available": 25,
    "Price": 7999
  },
  {
    "From": "Chennai",
    "To": "Delhi",
    "Departure": "5:00 AM",
    "Arrival": "8:00 AM",
    "Duration": "3 Hours",
    "Airline": "Air India",
    "Seats Available": 26,
    "Price": 8000
  },
  {
    "From": "Bangalore",
    "To": "Kolkata",
    "Departure": "6:00 PM",
    "Arrival": "9:00 PM",
    "Duration": "3 Hours",
    "Airline": "Air India",
    "Seats Available": 27,
    "Price": 5000
  },
  {
    "From": "Delhi",
    "To": "Chennai",
    "Departure": "3:00 AM",
    "Arrival": "6:05 AM",
    "Duration": "3 Hours 5 mins",
    "Airline": "Jet Airways",
    "Seats Available": 29,
    "Price": 7500
  },
  {
    "From": "Kolkata",
    "To": "Bangalore",
    "Departure": "2:30 AM",
    "Arrival": "4:50 AM",
    "Duration": "2 Hours 20 mins",
    "Airline": "Air India",
    "Seats Available": 36,
    "Price": 4500
  },
  {
    "From": "Chennai",
    "To": "Delhi",
    "Departure": "5:00 PM",
    "Arrival": "7:50 PM",
    "Duration": "2 Hours 50 mins",
    "Airline": "Indigo",
    "Seats Available": 56,
    "Price": 4800
  }
]


  constructor(private modalService: NgbModal,) {
  this.flag=false;
      this.showVal=false;
     }

 closeResult: string;

  ngOnInit() {
  	console.log("I am in 2nd comp");
  	console.log(this.destinationFrom);
    console.log(this.destinationTo);
  	 this.toFlight = this.destinationTo;
     this.fromFlight =  this.destinationFrom; 
  	// console.log(this.destinationTo);
  	// console.log(this.fromFlight);


  }
  showPrice(value)
  {
  	console.log(value);
  	this.showVal=true;
  }
  open_sort(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }
open_filter(content) {
    this.modalService.open(content).result.then((result) => {
    }, (reason) => {
    });
  }  
showMenu()
{
  this.flag=!this.flag;
}

}
