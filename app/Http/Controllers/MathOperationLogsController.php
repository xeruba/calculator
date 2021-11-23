<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MathOperationLog;

class MathOperationLogsController extends Controller 
{
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function calculate(Request $request)
    {
        $operation_array = explode(' ', $request->display);
        $result = '';
        $bonus = false;
        if (count($operation_array) > 0) {
            $result = $this->calc(null, $operation_array);
            $random_number = rand();
            $bonus = $random_number === $result ? true : false;
            
            if (is_numeric($result)){
                $math_operation_log = MathOperationLog::factory()->create([
                    'ip' => $request->ip(),
                    'operation' => $request->display,
                    'result' => $result,
                    'bonus' => $bonus
                ]);
            }
        }
        

        
        
        return response()->json([
			'display' => $request->display,
            'operation_array' => $operation_array,
            'result' => $result === null ? '' : $result,
            'congratulations' => $bonus
		]);
    }


    private function calc($value, $operation_array){
        try {
            if(($value === null)){
                if(count($operation_array) > 2){
                    $new_value = $this->executeOperation($operation_array[0], $operation_array[1], $operation_array[2]);
                    return $this->calc($new_value, array_slice($operation_array,3));
                }else if(count($operation_array) <= 2){
                    return '';
                    //throw new \Exception('Incomplete operation');
                }
            }else{
                if(count($operation_array) >= 2){
                    return $this->calc($this->executeOperation($value, $operation_array[0], $operation_array[1]), array_slice($operation_array,2));
                } else {
                    return $value;
                }
            }
        } catch (\Throwable $th) {
            //return $th->getMessage();
            return 'ERRO';
        }
    }

    private function executeOperation($value1, $operator, $value2){
        $value1 = (double) $value1;
        $value2 = (double) $value2;
    
        if(!(is_numeric($value1)) || !(is_numeric($value2))){
            //throw new \Exception('Not numeric value');
            return '';
        }
        
        if ($operator == '+') {
            return $value1+$value2;
        }else if($operator == '/') {
            if($value2 != 0){
                return $value1 / $value2;
            }else{
                throw new \Exception('Division by zero');
            }
        }else if($operator == '*') {
            return $value1*$value2;
        }else if($operator == '-') {
            return $value1-$value2;
        }else if($operator == 'MOD'){
            return $value1 % $value2;
        }else{
            //throw new \Exception("Can't evaluate");
            return '';
        }
        
    }
}
