import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  noterio: string;
  position: number;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, noterio: 'Evlenme sözleşmesi', price: 50},
  {position: 2, noterio: 'hibe Miras taksimi Gayrimenkul, hibe vaadi sözleşmesi', price: 20},
  {position: 3, noterio: 'Şirket sözleşmesi', price: 30},
  {position: 4, noterio: 'Gayrimenkul satış vaadi sözleşme', price: 40},
  {position: 5, noterio: 'Zilyetlik devri sözleşmesi', price: 10},
  {position: 6, noterio: 'İrtifak hakkı vaadi ve ortak mülkün idaresi sözleşmesi', price: 120},
  {position: 7, noterio: 'Medeni Kanunun 748. maddesine müstenit sükna hakkı sözleşmesi', price: 140},
  {position: 8, noterio: 'Kaydı hayat ile irat bağlanması sözleşmesi', price: 150},
  {position: 9, noterio: 'Ölünceye kadar bakma sözleşmesi', price: 180},
  {position: 10, noterio: 'Mülkiyeti muhafaza kaydı ile satış sözleşmesi', price: 200},
  {position: 11, noterio: 'Kira sözleşmesi', price: 200},
  {position: 12, noterio: 'Menkul mallarda hibe sözleşmesi', price: 300},
  {position: 13, noterio: 'Taksim ve ifraz sözleşmesi', price: 350},
  {position: 14, noterio: 'Evlat edinme sözleşmesi', price: 70},
  {position: 15, noterio: 'Temlik', price: 20},
  {position: 16, noterio: 'Taahhütname', price: 30},
  {position: 17, noterio: 'Kefaletname', price: 220},
  {position: 18, noterio: 'Vasiyetname', price: 500},
  {position: 19, noterio: 'Vakıf senedi', price: 700},
  {position: 20, noterio: 'Aile vakfı senedi', price: 800},
  {position: 21, noterio: 'Tanıma senedi', price: 500},
  {position: 22, noterio: 'Muvafakatname', price: 30},
  {position: 23, noterio: 'Sulhname', price: 20},
  {position: 24, noterio: 'Yeddiemin senedi', price: 25},
  {position: 25, noterio: 'Rehin senedi', price: 200},
  {position: 26, noterio: 'Borç senedi', price: 300},
  {position: 27, noterio: 'Fesihname', price: 400},
  {position: 28, noterio: 'İbraname', price: 100},
  {position: 29, noterio: 'Beyanname', price: 100},
  {position: 30, noterio: 'Şahadetname', price: 500},
  {position: 31, noterio: 'Piyango – Kura ve toplantı tutanağı', price: 4000},
  {position: 32, noterio: 'Emanetleri saklama tutanağı', price: 200},
  {position: 33, noterio: 'İfade tutanağı', price: 50},
  {position: 34, noterio: 'Tespit tutanağı', price: 100},
  {position: 35, noterio: 'Vekaletname', price: 300},
  {position: 36, noterio: 'Defter onaylanması', price: 200},
  {position: 37, noterio: 'Çevirme', price: 500},
  {position: 38, noterio: 'İmza sirküleri', price: 200},
  {position: 39, noterio: 'Protesto işleri', price: 250},
  {position: 40, noterio: 'İhbar – ihtarname işleri ve tebliği', price: 100},
  {position: 41, noterio: 'Tescil', price: 500},
];

@Component({
  selector: 'app-price-component',
  templateUrl: './price-component.component.html',
  styleUrls: ['./price-component.component.css']
})
export class PriceComponentComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
