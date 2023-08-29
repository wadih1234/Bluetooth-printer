import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BluetoothEscposPrinter } from 'react-native-bluetooth-escpos-printer';
import { hsdLogo } from './dummy-logo';

const SamplePrint = () => {
  return (
    <View>
      <Text>Sample Print Instruction</Text>
      <View style={styles.btn}>
        <Button
          onPress={async () => {
            await BluetoothEscposPrinter.printBarCode(
              '123456789012',
              BluetoothEscposPrinter.BARCODETYPE.JAN13,
              3,
              120,
              0,
              2,
            );
            await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
          }}
          title="Print BarCode"
        />
      </View>
      <View style={styles.btn}>
        <Button
          onPress={async () => {
            await BluetoothEscposPrinter.printQRCode(
              'https://hsd.co.id',
              280,
              BluetoothEscposPrinter.ERROR_CORRECTION.L,
            ); //.then(()=>{alert('done')},(err)=>{alert(err)});
            await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
          }}
          title="Print QRCode"
        />
      </View>

      <View style={styles.btn}>
        <Button
          onPress={async () => {
            await BluetoothEscposPrinter.printerUnderLine(2);
            await BluetoothEscposPrinter.printText('Prawito Hudoro\r\n', {
              encoding: 'GBK',
              codepage: 0,
              widthtimes: 0,
              heigthtimes: 0,
              fonttype: 1,
            });
            await BluetoothEscposPrinter.printerUnderLine(0);
            await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
          }}
          title="Print UnderLine"
        />
      </View>

      <View style={styles.btn}>
        <Button
          title="Print Shopping Receipts"
          onPress={async () => {
            let columnWidths = [8, 20, 20];
            try {
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
              await BluetoothEscposPrinter.printPic(hsdLogo, { width: 250, left: 150 });
              await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
              await BluetoothEscposPrinter.printColumn(
                [48],
                [BluetoothEscposPrinter.ALIGN.CENTER],
                ['TESTTT'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [32],
                [BluetoothEscposPrinter.ALIGN.CENTER],
                ['https://xfood.id'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Customer', 'BRONZO'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Packaging', 'Iya'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Delivery', 'Ali-EXPRESS'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printText('Products\r\n', { widthtimes: 1 });
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                columnWidths,
                [
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.RIGHT,
                ],
                ['1x', 'teffe7', '5$'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                columnWidths,
                [
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.RIGHT,
                ],
                ['1x', 'rizz', '40$'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                columnWidths,
                [
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.LEFT,
                  BluetoothEscposPrinter.ALIGN.RIGHT,
                ],
                ['1x', 'laban', '150$'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Subtotal', '300$'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Packaging', '60$'],
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Delivery', '3$'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [24, 24],
                [BluetoothEscposPrinter.ALIGN.LEFT, BluetoothEscposPrinter.ALIGN.RIGHT],
                ['Total', '300$'],
                {},
              );
              await BluetoothEscposPrinter.printText('\r\n\r\n', {});
              await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
              await BluetoothEscposPrinter.printQRCode(
                'DP0837849839',
                280,
                BluetoothEscposPrinter.ERROR_CORRECTION.L,
              );
              await BluetoothEscposPrinter.printerAlign(BluetoothEscposPrinter.ALIGN.CENTER);
              await BluetoothEscposPrinter.printColumn(
                [48],
                [BluetoothEscposPrinter.ALIGN.CENTER],
                ['DP0837849839'],
                { widthtimes: 2 },
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printColumn(
                [48],
                [BluetoothEscposPrinter.ALIGN.CENTER],
                ['Saturday 30 January 2021'],
                {},
              );
              await BluetoothEscposPrinter.printText(
                '================================================',
                {},
              );
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
              await BluetoothEscposPrinter.printText('\r\n\r\n\r\n', {});
            } catch (e) {
              alert(e.message || 'ERROR');
            }
          }}
        />
      </View>
    </View>
  );
};

export default SamplePrint;

const styles = StyleSheet.create({
  btn: {
    marginBottom: 8,
  },
});
