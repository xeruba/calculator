<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\MathOperationLog;
use Carbon\Carbon;

class MathOperationLogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */

    protected $model = MathOperationLog::class;

    public function definition()
    {
        return [
            'ip' => '127.0.0.1',
            'timestamp' => Carbon::now()->timestamp,
            'operation' => '',
            'result' => 0,
            'bonus' => 0
        ];
    }
}
